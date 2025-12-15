const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const diseases = [];

// Load diseases on server start
const loadDiseases = () => {
    fs.createReadStream(path.join(__dirname, '../data/diseases.csv'))
        .pipe(csv())
        .on('data', (data) => {
            // Process fields that are lists separated by semicolons
            if (data.symptoms) data.symptoms = data.symptoms.split(';').map(s => s.trim());
            if (data.treatments) data.treatments = data.treatments.split(';').map(s => s.trim());
            if (data.medications) data.medications = data.medications.split(';').map(s => s.trim());
            diseases.push(data);
        })
        .on('end', () => {
            console.log('Diseases data loaded from CSV');
        });
};

loadDiseases();

// @desc    Get all diseases
// @route   GET /api/diseases
// @access  Public
const getDiseases = (req, res) => {
    // Simple filtering for loaded data
    if (req.query.keyword) {
        const start_with = req.query.keyword.toLowerCase();
        const filtered = diseases.filter(d =>
            (d.name && d.name.toLowerCase().includes(start_with)) ||
            (d.symptoms && d.symptoms.some(s => s.toLowerCase().includes(start_with)))
        );
        res.json(filtered);
    } else {
        res.json(diseases);
    }
};

// @desc    Get single disease
// @route   GET /api/diseases/:id
// @access  Public
const getDiseaseById = (req, res) => {
    const disease = diseases.find((d) => d.id === req.params.id);

    if (disease) {
        res.json(disease);
    } else {
        res.status(404).json({ message: 'Disease not found' });
    }
};

// @desc    Get all unique symptoms
// @route   GET /api/diseases/symptoms
// @access  Public
const getSymptoms = (req, res) => {
    const allSymptoms = new Set();
    diseases.forEach(d => {
        if (d.symptoms) {
            d.symptoms.forEach(s => allSymptoms.add(s));
        }
    });

    // Convert Set to Array and sort alphabetically
    const uniqueSymptoms = Array.from(allSymptoms).sort();
    res.json(uniqueSymptoms);
};

module.exports = {
    getDiseases,
    getDiseaseById,
    getSymptoms,
};
