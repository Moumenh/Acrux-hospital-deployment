import joblib
import pandas as pd

class RandomForestClassifier:
    def __init__(self):
        path_to_artifacts = './research/'
        self.model = joblib.load(path_to_artifacts + "random_forest.joblib")

    def preprocessing(self, input_data):
        # JSON to pandas DataFrame
        # print(input_data)
        input_data = pd.DataFrame(input_data, index=[0])
        # print(input_data)
        return input_data

    def predict(self, input_data):
        # print(self.model.predict(input_data))
        return self.model.predict_proba(input_data)

    def postprocessing(self, input_data):
        label = 'Free from Disease'
        if input_data[1] > 0.5:
            label = 'Heart Disease'
        return {"probability": input_data[1], "label": label, "status": "OK"}

    def compute_prediction(self, input_data):
        try:
            input_data = self.preprocessing(input_data)
            prediction = self.predict(input_data)[0]  # only one sample
            prediction = self.postprocessing(prediction)

        except Exception as e:
            return {"status": "Error", "message": str(e)}

        return prediction

    