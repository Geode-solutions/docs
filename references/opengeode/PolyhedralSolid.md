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

# class PolyhedralSolid


```cpp
Inherits from SolidMesh<3U>
```



# class PolyhedralSolid


 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



```cpp
Inherits from SolidMesh<dimension>
```



## Functions

### PolyhedralSolid

```cpp
public void PolyhedralSolid<dimension>(const PolyhedralSolid<dimension> & )
```


### operator=

```cpp
public PolyhedralSolid<dimension> & operator=(const PolyhedralSolid<dimension> & )
```


### create

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > create()
```


 Create a new PolyhedralSolid using default data structure.

### create

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > create(const MeshImpl & impl)
```


 Create a new PolyhedralSolid using a specified data structure.

**impl** [in] Data structure implementation.

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > clone()
```


### PolyhedralSolid

```cpp
protected void PolyhedralSolid<dimension>()
```


### PolyhedralSolid

```cpp
protected void PolyhedralSolid<dimension>(PolyhedralSolid<dimension> && other)
```


### operator=

```cpp
protected PolyhedralSolid<dimension> & operator=(PolyhedralSolid<dimension> && other)
```




