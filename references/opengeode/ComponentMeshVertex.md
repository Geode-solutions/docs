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

# struct ComponentMeshVertex


 Identify a vertex in a geometric component



## Members

```cpp
public ComponentID component_id

```

```cpp
public index_t vertex

```



## Functions

### ComponentMeshVertex

```cpp
public void ComponentMeshVertex(ComponentID component_id_in, index_t vertex_id_in)
```


### ~ComponentMeshVertex

```cpp
public void ~ComponentMeshVertex()
```


### mesh_vertex

```cpp
public MeshVertex mesh_vertex()
```


### operator==

```cpp
public bool operator==(const ComponentMeshVertex & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




