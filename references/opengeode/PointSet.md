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



## Members

```cpp
public static const auto dim

```



# class PointSet


 Interface class to represent a set of 2D or 3D points. A point is a vertex associated to spatial coordinates



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### create

```cpp
public static std::unique_ptr<PointSet<dimension>> create()
```


 Create a new PointSet using default data structure.

### create

```cpp
public static std::unique_ptr<PointSet<dimension>> create(const MeshImpl & impl)
```


 Create a new PointSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public static MeshType type_name_static()
```


### PointSet

```cpp
protected void PointSet<value-parameter-0-0>()
```


### PointSet

```cpp
protected void PointSet<value-parameter-0-0>(PointSet<dimension> && other)
```


### operator=

```cpp
protected PointSet<dimension> & operator=(PointSet<dimension> && other)
```


### clone

```cpp
public std::unique_ptr<PointSet<dimension>> clone()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


 Compute the bounding box from mesh vertices



# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<3U>
```



## Members

```cpp
public static const auto dim

```



# class PointSet


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<1U>
```



## Members

```cpp
public static const auto dim

```



