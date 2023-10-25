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

# class OwnerSegment


```cpp
Inherits from GenericSegment<Point<2U>, 2U>
```



# class OwnerSegment


```cpp
Inherits from GenericSegment<Point<3U>, 3U>
```



# class OwnerSegment


```cpp
Inherits from GenericSegment<Point<1U>, 1U>
```



# class OwnerSegment


```cpp
Inherits from GenericSegment<Point<dimension>, dimension>
```



## Functions

### OwnerSegment

```cpp
public void OwnerSegment<>(Point<dimension> point0, Point<dimension> point1)
```


### OwnerSegment

```cpp
public void OwnerSegment<>(const OwnerSegment<dimension> & other)
```


### operator=

```cpp
public OwnerSegment<dimension> & operator=(const OwnerSegment<dimension> & other)
```


### OwnerSegment

```cpp
public void OwnerSegment<>(OwnerSegment<dimension> && other)
```


### operator=

```cpp
public OwnerSegment<dimension> & operator=(OwnerSegment<dimension> && other)
```




