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

# class OpenGeodeGraph


```cpp
Inherits from Graph
```



## Functions

### impl_name_static

```cpp
public static MeshImpl impl_name_static()
```


### impl_name

```cpp
public MeshImpl impl_name()
```


### OpenGeodeGraph

```cpp
public void OpenGeodeGraph()
```


### OpenGeodeGraph

```cpp
public void OpenGeodeGraph(OpenGeodeGraph && other)
```


### operator=

```cpp
public OpenGeodeGraph & operator=(OpenGeodeGraph && other)
```


### type_name

```cpp
public MeshType type_name()
```


### ~OpenGeodeGraph

```cpp
public void ~OpenGeodeGraph()
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### set_edge_vertex

```cpp
public void set_edge_vertex(const EdgeVertex & edge_vertex, index_t vertex_id, OGGraphKey )
```




