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

# struct ComponentMeshElement


 Identify an element in a model component



## Members

```cpp
public ComponentID component_id

```

```cpp
public index_t element_id

```



## Functions

### ComponentMeshElement

```cpp
public void ComponentMeshElement()
```


### ComponentMeshElement

```cpp
public void ComponentMeshElement(ComponentID component_id_in, index_t element_id_in)
```


### mesh_element

```cpp
public MeshElement mesh_element()
```


### operator==

```cpp
public bool operator==(const ComponentMeshElement & other)
```


### serialize

```cpp
public void serialize(Archive & archive)
```


### string

```cpp
public basic_string string()
```




