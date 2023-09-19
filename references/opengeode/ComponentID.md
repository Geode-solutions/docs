# class ComponentID


 Identify a component by its type and a unique index



## Functions

### ComponentID

```cpp
public void ComponentID()
```


### ComponentID

```cpp
public void ComponentID(NamedType component_type, uuid id)
```


### id

```cpp
public const uuid & id()
```


### id

```cpp
public uuid && id()
```


### type

```cpp
public const ComponentType & type()
```


### type

```cpp
public ComponentType && type()
```


### operator!=

```cpp
public _Bool operator!=(const ComponentID & other)
```


### operator==

```cpp
public _Bool operator==(const ComponentID & other)
```


### string

```cpp
public basic_string string()
```




