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

# class ModelerMetric


## Functions

### ModelerMetric

```cpp
public void ModelerMetric<dimension>()
```


### ~ModelerMetric

```cpp
public void ~ModelerMetric<dimension>()
```


### add_point

```cpp
public void add_point(const Point<dimension> & point)
```


### bbox

```cpp
public const BoundingBox<dimension> & bbox()
```


### grid

```cpp
public const Grid<dimension> & grid()
```


### build

```cpp
public const IsotropicMetric<dimension> & build()
```




# class ModelerMetric


# class ModelerMetric


