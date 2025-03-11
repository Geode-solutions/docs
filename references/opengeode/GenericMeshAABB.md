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

# class GenericMeshAABB


```cpp
Inherits from GenericMeshAABB<SurfaceMesh<dimension> >
```



## Functions

### GenericMeshAABB

```cpp
public void GenericMeshAABB<TriangulatedSurface<> >(const TriangulatedSurface<dimension> & mesh)
```


### closest_element

```cpp
public tuple closest_element(const Point<dimension> & query)
```




# class GenericMeshAABB


## Functions

### GenericMeshAABB

```cpp
public void GenericMeshAABB<SolidMesh<> >(const SolidMesh<dimension> & mesh)
```


### elements_aabb

```cpp
protected const AABBTree<dimension> & elements_aabb()
```




# class GenericMeshAABB


```cpp
Inherits from GenericMeshAABB<SolidMesh<dimension> >
```



## Functions

### GenericMeshAABB

```cpp
public void GenericMeshAABB<TetrahedralSolid<> >(const TetrahedralSolid<dimension> & mesh)
```


### closest_element

```cpp
public tuple closest_element(const Point<dimension> & query)
```




# class GenericMeshAABB


## Functions

### GenericMeshAABB

```cpp
public void GenericMeshAABB<EdgedCurve<> >(const EdgedCurve<dimension> & mesh)
```


### closest_element

```cpp
public tuple closest_element(const Point<dimension> & query)
```


### elements_aabb

```cpp
protected const AABBTree<dimension> & elements_aabb()
```




# class GenericMeshAABB

# class GenericMeshAABB


## Functions

### GenericMeshAABB

```cpp
public void GenericMeshAABB<SurfaceMesh<> >(const SurfaceMesh<dimension> & mesh)
```


### elements_aabb

```cpp
protected const AABBTree<dimension> & elements_aabb()
```




