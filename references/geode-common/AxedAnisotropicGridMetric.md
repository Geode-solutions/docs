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

# class AxedAnisotropicGridMetric


```cpp
Inherits from AnisotropicMetric<3U>
```



# class AxedAnisotropicGridMetric


```cpp
Inherits from AnisotropicMetric<2U>
```



# class AxedAnisotropicGridMetric


```cpp
Inherits from AnisotropicMetric<dimension>
```



## Functions

### AxedAnisotropicGridMetric

```cpp
public void AxedAnisotropicGridMetric<dimension>(const CoordinateSystem<dimension> & coordinate_system)
```


### ~AxedAnisotropicGridMetric

```cpp
public void ~AxedAnisotropicGridMetric<dimension>()
```


### set_metric

```cpp
public void set_metric(index_t axis, std::unique_ptr<GridMetric<dimension> > metric)
```


### metric

```cpp
public double metric(const Point<dimension> & point, const Vector<dimension> & vector)
```


### global_average_metric

```cpp
public std::array<double, dimension> global_average_metric()
```


### global_minimal_metric

```cpp
public std::array<double, dimension> global_minimal_metric()
```




