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

# class ThreePointsInternalDistance


## Functions

### ThreePointsInternalDistance

```cpp
public void ThreePointsInternalDistance()
```


### ~ThreePointsInternalDistance

```cpp
public void ~ThreePointsInternalDistance()
```


### smallest_internal_distance

```cpp
public double smallest_internal_distance(const Triangle2D & triangle)
```




