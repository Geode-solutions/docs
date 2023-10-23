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

# struct ModifiedTriangle


## Members

```cpp
public Triangle<dimension> new_triangle

```

```cpp
public index_t old_index

```



## Functions

### ModifiedTriangle

```cpp
public void ModifiedTriangle<dimension>(Triangle<dimension> && new_triangle_in, index_t old_index_in)
```


### ModifiedTriangle

```cpp
public void ModifiedTriangle<dimension>(const Triangle<dimension> & new_triangle_in, index_t old_index_in)
```




