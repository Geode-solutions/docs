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

# class ImplicitStreamLine


## Functions

### ImplicitStreamLine

```cpp
public void ImplicitStreamLine<>()
```


### ImplicitStreamLine

```cpp
public void ImplicitStreamLine<>(ImplicitStreamLine<> && stream_line)
```


### ~ImplicitStreamLine

```cpp
public void ~ImplicitStreamLine<>()
```


### add_first_point

```cpp
public void add_first_point(const Point<dimension> & position, double value)
```


### add_next_point

```cpp
public index_t add_next_point(index_t previous_vertex, const Point<dimension> & position, double value)
```


### point_value

```cpp
public double point_value(index_t point_index)
```


### length_between_values

```cpp
public optional length_between_values(double value1, double value2)
```


### streamline_curve

```cpp
public const EdgedCurve<dimension> & streamline_curve()
```




# class ImplicitStreamLine


# class ImplicitStreamLine


