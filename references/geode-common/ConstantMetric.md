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

# class ConstantMetric


 Constant metric implementation



```cpp
Inherits from IsotropicMetric<dimension>
```



## Functions

### ConstantMetric

```cpp
public void ConstantMetric<>(double metric)
```


### metric

```cpp
public double metric(const Point<dimension> & , const Vector<dimension> & )
```


### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```


### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```


### constant_metric

```cpp
public double constant_metric()
```


### global_average_metric

```cpp
public std::array<double, dimension> global_average_metric()
```


### global_minimal_metric

```cpp
public std::array<double, dimension> global_minimal_metric()
```


### median_metric

```cpp
public double median_metric()
```


### coordinate_system

```cpp
public CoordinateSystem<dimension> coordinate_system(const Point<dimension> & )
```




