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

# class Metric


 Interface class for metric computation



## Functions

### ~Metric

```cpp
public void ~Metric<dimension>()
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

### coordinate_system

```cpp
public CoordinateSystem<dimension> coordinate_system(const Point<dimension> & point)
```



