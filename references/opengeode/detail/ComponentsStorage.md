# class ComponentsStorage


## Functions

### nb_components

```cpp
```cpp
public index_t nb_components()
```
```


### has_component

```cpp
```cpp
public _Bool has_component(const uuid & id)
```
```


### component

```cpp
```cpp
public const Component & component(const uuid & id)
```
```


### component

```cpp
```cpp
public Component & component(const uuid & id)
```
```


### begin

```cpp
```cpp
public Iterator begin()
```
```


### end

```cpp
```cpp
public Iterator end()
```
```


### add_component

```cpp
```cpp
public void add_component(ComponentPtr component)
```
```


### save_components

```cpp
```cpp
public void save_components(string_view filename)
```
```


### delete_component

```cpp
```cpp
public void delete_component(const uuid & id)
```
```


### load_components

```cpp
```cpp
public void load_components(string_view filename)
```
```


### file_mapping

```cpp
```cpp
public flat_hash_map file_mapping(string_view directory)
```
```




