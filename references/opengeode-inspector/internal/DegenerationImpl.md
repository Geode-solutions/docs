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

# class DegenerationImpl


# class DegenerationImpl


 Implementation of the inspection of the degeneration of a Mesh



## Functions

### ~DegenerationImpl

```cpp
public void ~DegenerationImpl<Mesh>()
```


### is_mesh_degenerated

```cpp
public bool is_mesh_degenerated()
```


### small_edges

```cpp
public InspectionIssues small_edges(double threshold)
```


### degenerated_edges

```cpp
public InspectionIssues degenerated_edges()
```


### DegenerationImpl

```cpp
protected void DegenerationImpl<Mesh>(const Mesh & mesh)
```


### mesh

```cpp
protected const Mesh & mesh()
```




# class DegenerationImpl


# class DegenerationImpl


