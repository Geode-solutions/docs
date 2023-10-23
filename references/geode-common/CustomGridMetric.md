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

# class CustomGridMetric

# class CustomGridMetric

# class CustomGridMetric


```cpp
Inherits from Metric<dimension>
```



## Functions

### CustomGridMetric

```cpp
public void CustomGridMetric<dimension>(const Grid<dimension> & grid, string_view attribute_name)
```


### ~CustomGridMetric

```cpp
public void ~CustomGridMetric<dimension>()
```


### grid

```cpp
public const Grid<dimension> & grid()
```


### metric

```cpp
public double metric(const Point<dimension> & point)
```


### metric

```cpp
public double metric(index_t cell_index)
```


### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```


### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```


### average_metric

```cpp
public double average_metric()
```


### median_metric

```cpp
public double median_metric()
```




