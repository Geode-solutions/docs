# class AddInspectors


 This mixin represents an assembly of inspectors. Syntax to create a derivated class is class DerivateClass : public AddInspectors< dimension, Mesh, InspectorClassA, InspectorClassB, InspectorClassC >, public OtherOptionalMixins



```cpp
Inherits from Inspectors
```



## Functions

### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(const Mesh & mesh)
```


### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(const Mesh & mesh, _Bool verbose)
```


### AddInspectors

```cpp
protected void AddInspectors<Mesh, Inspectors...>(AddInspectors<Mesh, Inspectors...> && )
```




