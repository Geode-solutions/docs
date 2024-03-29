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

# class SamplingData


 Structure holding all the data required for the remeshing algorithm Aliases are defined for BRep and Section.



## Records

Impl



## Functions

### SamplingData

```cpp
public void SamplingData<DataModel>(DataModel & model, const Metric<dimension> & metric)
```


### ~SamplingData

```cpp
public void ~SamplingData<DataModel>()
```


### model

```cpp
public const Model & model()
```


### builder

```cpp
public Builder & builder()
```


### modifier

```cpp
public Modifier & modifier()
```


### metric

```cpp
public const Metric<dimension> & metric()
```


### mutex

```cpp
public std::mutex & mutex()
```


### tag_unique_vertices

```cpp
public void tag_unique_vertices(absl::Span<const index_t> unique_vertices)
```


### clean_model

```cpp
public CleanMappings clean_model()
```


### release_model

```cpp
public DataModel release_model()
```


### updated_triangles

```cpp
public vector updated_triangles(const Surface<dimension> & surface, index_t triangle)
```


### updated_tetrahedra

```cpp
public vector updated_tetrahedra(const Block<dimension> & block, index_t tetrahedron)
```




# class SamplingData

