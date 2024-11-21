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

# struct TetrahedraAfter


## Members

```cpp
public FixedArray modified

```



## Functions

### TetrahedraAfter

```cpp
public void TetrahedraAfter(size_t nb_modified_tetrahedra)
```


### TetrahedraAfter

```cpp
public void TetrahedraAfter(const TetrahedraAfter & other)
```


### TetrahedraAfter

```cpp
public void TetrahedraAfter(TetrahedraAfter && other)
```


### operator=

```cpp
public TetrahedraAfter & operator=(const TetrahedraAfter & other)
```


### operator=

```cpp
public TetrahedraAfter & operator=(TetrahedraAfter && other)
```




