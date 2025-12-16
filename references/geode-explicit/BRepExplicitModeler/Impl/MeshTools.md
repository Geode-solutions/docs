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

# struct MeshTools


## Members

```cpp
public std::unique_ptr<Mesh> mesh

```

```cpp
public std::unique_ptr<typename Mesh::Builder> builder

```

```cpp
public std::unique_ptr<Modifier> modifier

```

```cpp
public bool active_for_geometrical_computation

```



## Functions

### MeshTools

```cpp
public void MeshTools<Mesh>(std::unique_ptr<Mesh> mesh_in)
```


### MeshTools

```cpp
public void MeshTools<Mesh>(std::unique_ptr<Mesh> mesh_in, bool active)
```


### update

```cpp
public void update(std::unique_ptr<Mesh> && from_mesh)
```




