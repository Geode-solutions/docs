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

# struct NormalConstraint


## Members

```cpp
public index_t vertex

```

```cpp
public Vector3D normal

```



## Functions

### NormalConstraint

```cpp
public void NormalConstraint(index_t vertex_in, Vector3D normal_in)
```




