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

# class ThreePointsMetrics


# class ThreePointsMetrics


## Functions

### ThreePointsMetrics

```cpp
public void ThreePointsMetrics<dimension>()
```


### ~ThreePointsMetrics

```cpp
public void ~ThreePointsMetrics<dimension>()
```


### metric

```cpp
public optional metric(const Triangle<dimension> & triangle)
```


### set_metric

```cpp
public void set_metric(const Triangle<dimension> & triangle, double metric)
```




# class ThreePointsMetrics


