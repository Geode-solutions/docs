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

# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<2U>
```



# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<3U>
```



# class PointSet


 Interface class to represent a set of 2D or 3D points. A point is a vertex associated to spatial coordinates



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create()
```


 Create a new PointSet using default data structure.

### create

```cpp
public std::unique_ptr<PointSet<dimension> > create(const MeshImpl & impl)
```


 Create a new PointSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PointSet<dimension> > clone()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


 Compute the bounding box from mesh vertices

### PointSet

```cpp
protected void PointSet<>()
```


### PointSet

```cpp
protected void PointSet<>(PointSet<> && other)
```


### operator=

```cpp
protected PointSet<> & operator=(PointSet<> && other)
```




