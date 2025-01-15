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

# class EdgedCurve


```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<2U>
```



# class EdgedCurve


```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<1U>
```



# class EdgedCurve


```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### ~EdgedCurve

```cpp
public void ~EdgedCurve<>()
```


### create

```cpp
public std::unique_ptr<EdgedCurve<dimension> > create()
```


### create

```cpp
public std::unique_ptr<EdgedCurve<dimension> > create(const MeshImpl & impl)
```


### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<EdgedCurve<dimension> > clone()
```


### edge_length

```cpp
public double edge_length(index_t edge_id)
```


### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(index_t edge_id)
```


### is_edge_degenerated

```cpp
public bool is_edge_degenerated(index_t edge_id)
```


 Return if an edge is degenerated (means stands into an epsilon-large ball)

### segment

```cpp
public Segment<dimension> segment(index_t edge_id)
```


### texture_manager

```cpp
public TextureManager1D texture_manager()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


 Compute the bounding box from mesh vertices

### EdgedCurve

```cpp
protected void EdgedCurve<>()
```


### EdgedCurve

```cpp
protected void EdgedCurve<>(EdgedCurve<> && other)
```


### operator=

```cpp
protected EdgedCurve<> & operator=(EdgedCurve<> && other)
```




# class EdgedCurve


```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<3U>
```



