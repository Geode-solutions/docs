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

# class GridMetricImpl


## Functions

### GridMetricImpl

```cpp
protected void GridMetricImpl<dimension>(const Grid<dimension> & grid, basic_string_view attribute_name)
```


### GridMetricImpl

```cpp
protected void GridMetricImpl<dimension>(const Grid<dimension> & grid)
```


### grid

```cpp
protected const Grid<dimension> & grid()
```


### index_metric

```cpp
protected double index_metric(const Index & index)
```


### index_metric

```cpp
protected double index_metric(index_t index)
```


### paint_cell

```cpp
protected void paint_cell(const Index & index, double metric)
```


### replace_default

```cpp
protected void replace_default(double default_metric)
```


### average_metric

```cpp
public std::array<double, dimension> average_metric()
```


### minimal_metric

```cpp
public std::array<double, dimension> minimal_metric()
```


### median_metric

```cpp
public double median_metric()
```


### minimal_metric

```cpp
public double minimal_metric(const Segment<dimension> & segment)
```


### minimal_metric

```cpp
public double minimal_metric(const Triangle<dimension> & triangle)
```


### coordinate_system

```cpp
public CoordinateSystem<dimension> coordinate_system(const Point<dimension> & point)
```




