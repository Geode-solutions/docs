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

# struct PolyhedronFacet


 This struct represents a facet in a polyhedron



## Members

```cpp
public index_t polyhedron_id

```

```cpp
public local_index_t facet_id

```



## Functions

### PolyhedronFacet

```cpp
public void PolyhedronFacet()
```


### PolyhedronFacet

```cpp
public void PolyhedronFacet(const PolyhedronVertex & vertex)
```


### PolyhedronFacet

```cpp
public void PolyhedronFacet(index_t polyhedron_id_in, local_index_t facet_id_in)
```


### operator==

```cpp
public bool operator==(const PolyhedronFacet & other)
```


### operator!=

```cpp
public bool operator!=(const PolyhedronFacet & other)
```


### operator<

```cpp
public bool operator<(const PolyhedronFacet & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




