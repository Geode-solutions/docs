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
public double metric(const Point<dimension> & point)
```

### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```

### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```

### minimal_metric

```cpp
public typename std::enable_if<T == 3, double>::type minimal_metric(const Tetrahedron & tetrahedron)
```


### average_metric

```cpp
public double average_metric()
```

### median_metric

```cpp
public double median_metric()
```



