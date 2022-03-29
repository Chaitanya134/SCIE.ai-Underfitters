# SCIE.ai
Using CNN to estimate the intensity of cyclone using INSAT-3D IR Images

![image](https://user-images.githubusercontent.com/67907435/160513566-7715c356-50f5-436d-bf83-2c811e7f5806.png)

## Problem Statement
Development of a deep Convolutional Neural Network (CNN) for Tropical Cyclone intensity
estimation using half-hourly INSAT-3D IR Images and development of a web application
for visualization of the imagery. INSAT3D/3DR observations are available at every 15-
minute interval and these observations are very useful in understanding the instantaneous
structural changes during evolution, intensification, and landfall of Tropical Cyclones.
Datasets of Cyclones captured by INSAT-3D over the Indian Oceans are available since
2014. These datasets can be used for training and testing of the Model. Traditional
methods for Intensity estimation require accurate center determination for intensity
estimation. Development of CNN based model for intensity estimation will be very useful
during the initial stage of cyclone formation when determination of accurate center
becomes difficult.

## Our Solution
**SCIE.ai**
(Smart Cyclone Intensity Estimator.ai)

## How our solution works
- We have made a Convolutional Neural Network-based architecture
that uses Deep learning to estimate the intensity of cyclones using
INSAT-3D satellite images.
- Our model gives around 90% accuracy as of now and we plan to
increase it further in the coming future.
- We have also made a web application that would take an image as an
input and give the prediction in a very user-friendly way.
- Our Aim is to forecast eddy currents that causes cyclones several hours
prior to them happening.

## Architechture
![image](https://user-images.githubusercontent.com/67907435/160514526-ae6a75e0-3455-46f5-b42f-dcde2bad9bcf.png)

## Flow Chart
![image](https://user-images.githubusercontent.com/67907435/160514564-71e7aa91-4dde-4cd7-86d6-d30f1c7d1be8.png)

![image](https://user-images.githubusercontent.com/67907435/160514602-f4e3a5b4-8d75-4484-9929-0dd82a38cdb2.png)

## Technologies
- Python
- Tensorflow(keras)
- React
- Javascript
- CNN
- FastAPI

## Future Plans
- Using a better database that has a lot more images so as to increase
our accuracy.
- We also plan to use other factors of the cyclone like hole size and
latitudes and longitudes and using historic data, Predict wind speed
and thus, cyclone intensity.

## Issues that we may face
- Lack of Proper Dataset
- Inconsistency in Data
- Complexity
