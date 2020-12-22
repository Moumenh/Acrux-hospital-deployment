from django.test import TestCase 

from doctor.ml.classifier.random_forest import RandomForestClassifier

class MLTests(TestCase):
    def test_rf_algorithm(self):
        input_data = {
            "age": 45,
            "sex": 1,
            "cp": 3,
            "trestbps": 110,
            "chol": 264,
            "fbs": 0,
            "restecg": 1,
            "thalach": 132,
            "exang": 0,
            "oldpeak": 1.2,
            "slope": 1,
            "ca": 0,
            "thal": 3
        }
        my_alg = RandomForestClassifier()
        response = my_alg.compute_prediction(input_data)
        print(response['label'])
        self.assertEqual('OK', response['status'])
        self.assertTrue('label' in response)
        self.assertEqual('3ayesh', response['label'])