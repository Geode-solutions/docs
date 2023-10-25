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

# struct FieldLinePoint


## Members

```cpp
public Point3D point

```

```cpp
public index_t vertex

```

```cpp
public local_index_t direction

```

```cpp
public signed_index_t orientation

```



## Functions

### FieldLinePoint

```cpp
public void FieldLinePoint(Point3D point_in, index_t vertex_in, local_index_t direction_in, signed_index_t orientation_in)
```




