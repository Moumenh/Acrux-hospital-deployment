from django.test import TestCase 

from doctor.ml.classifier.breast_cancer import RandomForestCancerClassifier

class MLTests(TestCase):
    def test_rf_algorithm(self):
        input_data = {
            "Clump_Thickness": 9,
            "Cell_Size_Uniformity": 5,
            "Cell_Shape_Uniformity": 5,
            "Marginal_Adhesion": 4,
            "Single_Epi_Cell_Size": 4,
            "Bare_Nuclei": 5,
            "Bland_Chromatin": 4,
            "Normal_Nucleoli": 3,
            "Mitoses": 3
        }
        my_alg = RandomForestCancerClassifier()
        response = my_alg.compute_prediction(input_data)
        print(response['label'])
        self.assertEqual('OK', response['status'])
        self.assertTrue('label' in response)
        self.assertEqual('benign', response['label'])