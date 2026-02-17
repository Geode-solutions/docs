<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class DataConstraintsManager


```cpp
Inherits from DataPointsManager<dimension>, GradientDataManager<dimension>, TangentialDataManager<dimension>
```



## Functions

### DataConstraintsManager

```cpp
public void DataConstraintsManager<dimension>()
```


### DataConstraintsManager

```cpp
public void DataConstraintsManager<dimension>(DataConstraintsManager<dimension> && other)
```


### ~DataConstraintsManager

```cpp
public void ~DataConstraintsManager<dimension>()
```


### data_bounding_box

```cpp
public BoundingBox<dimension> data_bounding_box()
```




# class DataConstraintsManager


```cpp
Inherits from DataPointsManager<3U>, GradientDataManager<3U>, TangentialDataManager<3U>
```



# class DataConstraintsManager


```cpp
Inherits from DataPointsManager<2U>, GradientDataManager<2U>, TangentialDataManager<2U>
```



