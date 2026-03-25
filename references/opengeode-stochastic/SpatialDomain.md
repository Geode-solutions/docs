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

# class SpatialDomain


## Functions

### SpatialDomain

```cpp
public void SpatialDomain<dimension>(const BoundingBox<dimension> & domain, double buffer_size)
```


### box

```cpp
public const BoundingBox<dimension> box()
```


### contains

```cpp
public bool contains(const Point<dimension> & point)
```


### n_volume

```cpp
public double n_volume()
```


### smallest_length

```cpp
public double smallest_length()
```


### extended_contains

```cpp
public bool extended_contains(const Point<dimension> & point)
```


### extended_n_volume

```cpp
public double extended_n_volume()
```


### extended_box

```cpp
public const BoundingBox<dimension> extended_box()
```




