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

# class RemeshAlgo


# class RemeshAlgo


## Functions

### RemeshAlgo

```cpp
protected void RemeshAlgo<dimension>(const Metric<dimension> & metric, Span lock_vertices)
```


### ~RemeshAlgo

```cpp
protected void ~RemeshAlgo<dimension>()
```


### common_output

```cpp
protected RemeshedSurface<dimension> common_output()
```


### remeshed

```cpp
protected const TriangulatedSurface<dimension> & remeshed()
```


### remeshed_builder

```cpp
protected TriangulatedSurfaceBuilder<dimension> & remeshed_builder()
```


### lock_vertices

```cpp
protected Span lock_vertices()
```


### set_mapping

```cpp
protected void set_mapping(std::vector<VertexOrigin> && mapping)
```


### add_mapping

```cpp
protected void add_mapping(index_t background_vertex, bool is_locked)
```


### metric

```cpp
protected const Metric<dimension> & metric()
```




# class RemeshAlgo


