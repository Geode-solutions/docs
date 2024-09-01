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

# class PointSetBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



# class PointSetBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class PointSetBuilder


 Interface class to represent the builder of a PointSet



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > create(PointSet<dimension> & mesh)
```


 Create the builder associated with a PointSet.

**mesh** [in] The PointSet to build/modify

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```


 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### copy

```cpp
public void copy(const PointSet<dimension> & point_set)
```


### PointSetBuilder

```cpp
protected void PointSetBuilder<dimension>(PointSet<dimension> & mesh)
```




