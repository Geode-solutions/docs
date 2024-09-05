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

# class Exception


```cpp
Inherits from OpenGeodeException
```



## Members

```cpp
public std::queue<ElementStamp> queue_

```

```cpp
public std::vector<ElementType> not_processed_elements_

```

```cpp
public std::optional<ElementType> exception_element_

```



## Functions

### Exception

```cpp
public void Exception(Orchestrator<ElementType> & orchestrator, std::optional<ElementType> element, const Args &... message)
```


### not_processed_elements

```cpp
public const std::vector<ElementType> & not_processed_elements()
```


### exception_element

```cpp
public std::optional<ElementType> exception_element()
```




