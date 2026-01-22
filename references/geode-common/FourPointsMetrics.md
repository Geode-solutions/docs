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

# class FourPointsMetrics


## Functions

### FourPointsMetrics

```cpp
public void FourPointsMetrics()
```


### ~FourPointsMetrics

```cpp
public void ~FourPointsMetrics()
```


### metric

```cpp
public optional metric(const Tetrahedron & tetrahedron)
```


### set_metric

```cpp
public void set_metric(const Tetrahedron & tetrahedron, double metric)
```




