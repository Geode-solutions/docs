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

# class EdgedCurveBuilder


```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class EdgedCurveBuilder


```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



# class EdgedCurveBuilder


 Interface class to represent the builder of a EdgedCurve



```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<EdgedCurveBuilder<dimension> > create(EdgedCurve<dimension> & mesh)
```


 Create the builder associated with an EdgedCurve.

**mesh** [in] The EdgedCurve to build/modify

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```


 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### copy

```cpp
public void copy(const EdgedCurve<dimension> & edged_curve)
```


### EdgedCurveBuilder

```cpp
protected void EdgedCurveBuilder<dimension>(EdgedCurve<dimension> & mesh)
```




