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

# struct PolyhedronFacetEdge


## Members

```cpp
public PolyhedronFacet polyhedron_facet

```

```cpp
public local_index_t edge_id

```



## Functions

### PolyhedronFacetEdge

```cpp
public void PolyhedronFacetEdge()
```


### PolyhedronFacetEdge

```cpp
public void PolyhedronFacetEdge(PolyhedronFacet facet, local_index_t edge_id_in)
```


### operator==

```cpp
public bool operator==(const PolyhedronFacetEdge & other)
```


### operator!=

```cpp
public bool operator!=(const PolyhedronFacetEdge & other)
```


### operator<

```cpp
public bool operator<(const PolyhedronFacetEdge & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




