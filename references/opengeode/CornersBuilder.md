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

# class CornersBuilder


## Functions

### load_corners

```cpp
public void load_corners(basic_string_view directory)
```


### corner_mesh_builder

```cpp
public std::unique_ptr<PointSetBuilder<dimension> > corner_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Corner mesh

**id** [in] Unique index of the Corner

### set_corner_name

```cpp
public void set_corner_name(const uuid & id, basic_string_view name)
```


### CornersBuilder

```cpp
protected void CornersBuilder<dimension>(Corners<dimension> & corners)
```


### create_corner

```cpp
protected const uuid & create_corner()
```


### create_corner

```cpp
protected const uuid & create_corner(const MeshImpl & impl)
```


### create_corner

```cpp
protected void create_corner(uuid corner_id)
```


### create_corner

```cpp
protected void create_corner(uuid corner_id, const MeshImpl & impl)
```


### delete_corner

```cpp
protected void delete_corner(const Corner<dimension> & corner)
```


### set_corner_mesh

```cpp
protected void set_corner_mesh(const uuid & id, std::unique_ptr<PointSet<dimension> > mesh)
```


### modifiable_corner_mesh

```cpp
protected PointSet<dimension> & modifiable_corner_mesh(const uuid & id)
```


### steal_corner_mesh

```cpp
protected std::unique_ptr<PointSet<dimension> > steal_corner_mesh(const uuid & id)
```




# class CornersBuilder


# class CornersBuilder


