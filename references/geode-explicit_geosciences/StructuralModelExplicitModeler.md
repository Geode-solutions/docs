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

# class StructuralModelExplicitModeler


```cpp
Inherits from BRepExplicitModeler
```



## Functions

### StructuralModelExplicitModeler

```cpp
public void StructuralModelExplicitModeler(const StructuralModelExplicitModeler & )
```


### operator=

```cpp
public StructuralModelExplicitModeler & operator=(const StructuralModelExplicitModeler & )
```


### StructuralModelExplicitModeler

```cpp
public void StructuralModelExplicitModeler(StructuralModel & model, const class BRepExplicitModeler::Parameters & parameters)
```


### ~StructuralModelExplicitModeler

```cpp
public void ~StructuralModelExplicitModeler()
```


### add_fault

```cpp
public uuid add_fault(std::vector<std::unique_ptr<TriangulatedSurface3D> > & meshes)
```


### add_horizon

```cpp
public uuid add_horizon(std::vector<std::unique_ptr<TriangulatedSurface3D> > & meshes)
```


### process

```cpp
public MeshElements process()
```


 Compute all intersections between input StructuralModel meshes, and return the list of not processed elements (e.g. because of process failure).



