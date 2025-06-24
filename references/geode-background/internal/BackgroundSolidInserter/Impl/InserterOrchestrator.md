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

# class InserterOrchestrator


```cpp
Inherits from Orchestrator<index_t>
```



## Functions

### InserterOrchestrator

```cpp
public void InserterOrchestrator<Mesh>(const InserterOrchestrator<Mesh> & )
```


### operator=

```cpp
public InserterOrchestrator<Mesh> & operator=(const InserterOrchestrator<Mesh> & )
```


### InserterOrchestrator

```cpp
public void InserterOrchestrator<Mesh>(InserterOrchestrator<Mesh> && )
```


### operator=

```cpp
public InserterOrchestrator<Mesh> & operator=(InserterOrchestrator<Mesh> && )
```


### output_insertion_info

```cpp
public ElementInsertionInfo && output_insertion_info()
```


### insert_vertices

```cpp
public void insert_vertices(Span elements)
```


### InserterOrchestrator

```cpp
protected void InserterOrchestrator<Mesh>(class BackgroundSolidInserter::Impl & inserter, ProgressLogger & logger, const Mesh & mesh)
```


### do_process_element

```cpp
protected void do_process_element(const Element & element)
```

### skip_element

```cpp
protected bool skip_element(const Element & )
```


### skip_on_infinite_loop

```cpp
protected bool skip_on_infinite_loop()
```


### nb_levels

```cpp
protected index_t nb_levels()
```


### insertion_info

```cpp
protected ElementInsertionInfo & insertion_info()
```


### inserter

```cpp
protected class BackgroundSolidInserter::Impl & inserter()
```


### mesh

```cpp
protected const Mesh & mesh()
```


### mesh_vertex_to_background_vertex

```cpp
protected Span mesh_vertex_to_background_vertex()
```


### process_element

```cpp
protected ProcessElementResult process_element(const Element & element)
```




