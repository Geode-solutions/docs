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

# class ThreePoints


## Functions

### ThreePoints

```cpp
public void ThreePoints(array points_in)
```


### point

```cpp
public const geode::Point2D & point(geode::local_index_t position)
```


### operator==

```cpp
public bool operator==(const ThreePointsType & other)
```




