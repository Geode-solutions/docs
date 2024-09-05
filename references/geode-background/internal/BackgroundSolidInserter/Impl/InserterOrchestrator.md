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
public void InserterOrchestrator(const InserterOrchestrator & )
```


### operator=

```cpp
public InserterOrchestrator & operator=(const InserterOrchestrator & )
```


### InserterOrchestrator

```cpp
public void InserterOrchestrator(InserterOrchestrator && )
```


### operator=

```cpp
public InserterOrchestrator & operator=(InserterOrchestrator && )
```


### InserterOrchestrator

```cpp
protected void InserterOrchestrator(ProgressLogger & logger)
```


### do_process_element

```cpp
protected void do_process_element(const Element & element)
```

### skip_element

```cpp
protected bool skip_element(const ElementStamp & )
```


### skip_on_infinite_loop

```cpp
protected bool skip_on_infinite_loop()
```


### nb_levels

```cpp
protected index_t nb_levels()
```


### process_element

```cpp
protected ProcessElementResult process_element(const ElementStamp & element_stamp)
```




