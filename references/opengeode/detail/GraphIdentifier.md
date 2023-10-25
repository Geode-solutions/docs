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

# class GraphIdentifier


## Records

Impl



## Functions

### GraphIdentifier

```cpp
public void GraphIdentifier(const GraphIdentifier & )
```


### operator=

```cpp
public GraphIdentifier & operator=(const GraphIdentifier & )
```


### GraphIdentifier

```cpp
public void GraphIdentifier(GraphIdentifier && )
```


### operator=

```cpp
public GraphIdentifier & operator=(GraphIdentifier && )
```


### GraphIdentifier

```cpp
public void GraphIdentifier(const Graph & graph)
```


### ~GraphIdentifier

```cpp
public void ~GraphIdentifier()
```


### identify_vertices

```cpp
public index_t identify_vertices()
```


### vertex_identifier

```cpp
public index_t vertex_identifier(index_t vertex_id)
```


### identified_connected_vertices

```cpp
public absl::FixedArray<std::vector<index_t> > identified_connected_vertices()
```




