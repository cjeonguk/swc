//// [interfacesWithPredefinedTypesAsNames.ts]
//! 
//!   x interface name is invalid
//!    ,----
//!  1 | interface any { }
//!    :           ^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  2 | interface number { }
//!    :           ^^^^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  3 | interface string { }
//!    :           ^^^^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  4 | interface boolean { }
//!    :           ^^^^^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  5 | interface void {}
//!    :           ^^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  6 | interface unknown {}
//!    :           ^^^^^^^
//!    `----
//! 
//!   x interface name is invalid
//!    ,----
//!  7 | interface never {}
//!    :           ^^^^^
//!    `----
