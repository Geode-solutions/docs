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

# struct PointSetStat


## Members

```cpp
public index_t ref_position

```

```cpp
public index_t nb_points

```

```cpp
public Point3D bbox_min

```



## Functions

### operator<

```cpp
public bool operator<(const PointSetStat & other)
```




