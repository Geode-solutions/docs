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

# class Orchestrator


## Records

ProcessElementResult

ElementStamp

Stamp

Exception



## Functions

### Orchestrator

```cpp
public void Orchestrator<ElementType>(const Orchestrator<ElementType> & )
```


### operator=

```cpp
public Orchestrator<ElementType> & operator=(const Orchestrator<ElementType> & )
```


### Orchestrator

```cpp
public void Orchestrator<ElementType>(Orchestrator<ElementType> && )
```


### operator=

```cpp
public Orchestrator<ElementType> & operator=(Orchestrator<ElementType> && )
```


### ~Orchestrator

```cpp
public void ~Orchestrator<ElementType>()
```


### level

```cpp
public index_t level()
```


### apply

```cpp
public void apply(absl::Span<const Element> elements)
```


### Orchestrator

```cpp
protected void Orchestrator<ElementType>()
```




