interface ReplicatedStorage extends Instance {
	TS: Folder & {
		pets: Folder & {
			pet_utils: ModuleScript;
			pets_service_client: ModuleScript;
			pets_manager: ModuleScript;
			pet_bouncer: ModuleScript;
			pet_positions: ModuleScript;
			pets_mover: ModuleScript;
			pets_service: ModuleScript;
			pet: ModuleScript;
		};
		player: Folder & {
			player_location: ModuleScript;
			player_service: ModuleScript;
			player_data: ModuleScript;
		};
		help: Folder & {
			CONF: ModuleScript;
			play_sound: ModuleScript;
			math: ModuleScript;
			assist: ModuleScript;
			helpers: ModuleScript;
			DATA: ModuleScript;
			LDATA: ModuleScript;
		};
		ui: Folder & {
			hooks: Folder & {
				use_screensize: ModuleScript;
			};
			utils: Folder;
			comps: Folder & {
				Wrappers: ModuleScript;
				LBox: ModuleScript;
				CostUI: ModuleScript;
			};
			LeftButtons: ModuleScript;
			MainUI: ModuleScript;
		};
		signals: Folder & {
			client_signals: ModuleScript;
			MineActionSig: ModuleScript;
			server_signals: ModuleScript;
		};
		fossils: Folder & {
			fossil_health_ui: ModuleScript;
			fossil_services: ModuleScript;
			Stage: ModuleScript;
			fossil: ModuleScript;
		};
		constants: ModuleScript;
	};
	["public"]: Folder & {
		models: Folder & {
			redhover: MeshPart;
			old_moneybag: Part & {
				Mesh: SpecialMesh;
				Weld: Weld;
			};
			Coin: MeshPart & {
				Decal1: Decal;
				Decal2: Decal;
			};
			CoinLight: MeshPart;
			rebirth_effect: Part & {
				Main: Attachment;
				MiscEffects: Attachment & {
					Lines: ParticleEmitter;
				};
			};
			Hoverboard: MeshPart & {
				Attachment: Attachment;
			};
			jar: Model;
			money_bag: MeshPart & {
				Trail: Trail;
				Att1: Attachment;
				Att2: Attachment;
			};
			Trail: Part & {
				Trail: Trail;
				Attachment2: Attachment;
				Attachment0: Attachment;
				Trail2: Trail;
				Attachment3: Attachment;
				Attachment1: Attachment;
			};
			Tntmade: MeshPart & {
				SurfaceAppearance: SurfaceAppearance;
				WeldConstraint: WeldConstraint;
			};
			moneybag2: MeshPart & {
				Trail: Trail;
				Att1: Attachment;
				Att2: Attachment;
			};
			tntcrate: Part;
			bonus_swirl: Part & {
				Ground2: Attachment;
				Swirl: ParticleEmitter;
			};
			CoinsFlag: MeshPart;
			MagnetFlag: MeshPart;
		};
		plots: Folder & {
			dino: Folder & {
				dino2: MeshPart;
				dino1: MeshPart;
				dino3: MeshPart;
				dino4: MeshPart;
			};
			fossil: Folder & {
				fossil3: MeshPart;
				fossil1: MeshPart;
				fossil2: MeshPart;
				fossil4: MeshPart;
			};
			crate: Folder & {
				crate1: MeshPart;
				crate3: MeshPart;
				crate2: MeshPart;
				crate4: MeshPart;
			};
			bone: Folder & {
				bone3: MeshPart;
				bone4: MeshPart;
				bone1: MeshPart;
				bone2: MeshPart;
			};
		};
		hovers: Folder & {
			Hoverboard5: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard7: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard2: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard8: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard6: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard3: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				Sparkles: ParticleEmitter;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard4: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
			Hoverboard1: MeshPart & {
				Trail: Trail;
				Center: Attachment;
				LeftCorner: Attachment;
				RightCorner: Attachment;
				Back: Attachment & {
					Sparkles: ParticleEmitter;
				};
			};
		};
		cubes: Folder & {
			volcano2: MeshPart;
			blue: MeshPart;
			sand: MeshPart;
			mushroom: MeshPart;
			pink: MeshPart;
			ice: MeshPart;
			volcano: MeshPart;
			orange: MeshPart;
			red: MeshPart;
		};
		particles: Folder & {
			Celebration: Folder & {
				part: Part & {
					Leave: ParticleEmitter;
					["0"]: Attachment;
					["Spin Script"]: Script;
					Spec: ParticleEmitter;
					Feather: ParticleEmitter;
				};
			};
			littleBurst: Folder & {
				Sparkles: ParticleEmitter;
				Ring2: ParticleEmitter;
				Ring1: ParticleEmitter;
			};
			explosion: Folder & {
				BlackSmoke1: ParticleEmitter;
				QuickImpact1: ParticleEmitter;
				Light2: ParticleEmitter;
				GroundWind: ParticleEmitter;
				GroundCircle2: ParticleEmitter;
				Stars1: ParticleEmitter;
				BlackSmoke2: ParticleEmitter;
				["Shots?"]: ParticleEmitter;
				BigBlackImpact: ParticleEmitter;
				WindImpact: ParticleEmitter;
				LIght1: ParticleEmitter;
				QuickImpact2: ParticleEmitter;
				Stars2: ParticleEmitter;
				GroundCrack: ParticleEmitter;
				WeirdCrescent: ParticleEmitter;
				GroundCircle1: ParticleEmitter;
				BlackPulse: ParticleEmitter;
				BombStar: ParticleEmitter;
			};
			bigBurst: Folder & {
				Rings: ParticleEmitter;
				Flare: ParticleEmitter;
				Coins2: ParticleEmitter;
				Sparkles: ParticleEmitter;
				Coins: ParticleEmitter;
			};
		};
		items: Folder & {
			sign: Model & {
				ui: Part;
				Part: Part;
			};
			EGGS: Model & {
				["Meshes/EGGS_Sphere.005"]: MeshPart;
				["29"]: MeshPart;
				["Meshes/EGGS_Sphere.004"]: MeshPart;
				["1"]: MeshPart;
				["3"]: MeshPart;
				["2"]: MeshPart;
				["5"]: MeshPart;
				["4"]: MeshPart;
				["7"]: MeshPart;
				["6"]: MeshPart;
				["25"]: MeshPart;
				["8"]: MeshPart;
				["27"]: MeshPart;
				["17"]: MeshPart;
				["31"]: MeshPart;
				["21"]: MeshPart;
				["33"]: MeshPart;
				["23"]: MeshPart;
				["Meshes/EGGS_Sphere"]: MeshPart;
				["34"]: MeshPart;
				["Meshes/EGGS_Sphere.007"]: MeshPart;
				["28"]: MeshPart;
				["10"]: MeshPart;
				["12"]: MeshPart;
				["Meshes/EGGS_Sphere.001"]: MeshPart;
				["11"]: MeshPart;
				["32"]: MeshPart;
				["13"]: MeshPart;
				["9"]: MeshPart;
				["19"]: MeshPart;
				["18"]: MeshPart;
				["15"]: MeshPart;
				["Meshes/EGGS_Sphere.003"]: MeshPart;
				["14"]: MeshPart;
				["Meshes/EGGS_Sphere.002"]: MeshPart;
				["16"]: MeshPart;
				["26"]: MeshPart;
				["20"]: MeshPart;
				["30"]: MeshPart;
				["22"]: MeshPart;
				["Meshes/EGGS_Sphere.006"]: MeshPart;
			};
			gift_effect: Part;
			Plane: MeshPart & {
				a15: Attachment;
				a9: Attachment;
				a8: Attachment;
				a4: Attachment;
				a5: Attachment;
				a6: Attachment;
				a7: Attachment;
				a10: Attachment;
				a2: Attachment;
				a1: Attachment;
				a17: Attachment;
				a13: Attachment;
				a16: Attachment;
				a14: Attachment;
				a11: Attachment;
				a12: Attachment;
				a3: Attachment;
			};
		};
	};
	instance: Folder & {
		models: Folder & {
			PetObj: Model & {
				Animator: RemoteEvent;
				Base: Part;
				Obj: Model & {
					["Left Leg"]: Part;
					AnimationController: AnimationController;
					["Right Leg"]: Part;
					["Left Arm"]: Part;
					Head: Part;
					Torso: Part & {
						["Left Shoulder"]: Motor6D;
						["Right Shoulder"]: Motor6D;
						Neck: Motor6D;
						["Right Hip"]: Motor6D;
						["Left Hip"]: Motor6D;
					};
					["Right Arm"]: Part;
					Body: Part & {
						["Root Hip"]: Motor6D;
					};
				};
			};
			Footprints: Folder & {
				Grass: Model & {
					Foot: Part & {
						Decal: Decal;
					};
				};
				Sand: Model & {
					Foot: Part & {
						ParticleEmitter: ParticleEmitter;
					};
				};
				Dirt: Model & {
					Foot: Part & {
						Decal: Decal;
					};
				};
				Snow: Model & {
					Foot: Part;
				};
			};
			eggie: Folder & {
				egg_stand22: Model & {
					Egg: MeshPart;
					EggHolder: Model & {
						Part: Part & {
							Beam: Beam;
						};
						Model: Model & {
							["Mesh Parts"]: MeshPart;
							Model: Model;
						};
					};
					NeonLight: MeshPart;
					Base: Model & {
						["Mesh Parts"]: MeshPart;
					};
					Screen: Part & {
						SurfaceGui: SurfaceGui & {
							TextLabel: TextLabel;
						};
					};
					Light: MeshPart;
				};
				trans_arrow: MeshPart;
				egg_stand: Model & {
					Egg: MeshPart;
					EggHolder: Model & {
						Part: Part & {
							Beam: Beam;
						};
						Model: Model & {
							["Mesh Parts"]: MeshPart;
							Model: Model;
						};
					};
					NeonLight: MeshPart;
					Base: Model & {
						["Mesh Parts"]: MeshPart & {
							Attachment: Attachment & {
								PointLight: PointLight;
							};
						};
					};
					Screen: Part & {
						SurfaceGui: SurfaceGui & {
							TextLabel: TextLabel;
						};
					};
					Light: MeshPart;
				};
			};
		};
		pets: Folder & {
			["03_dodo"]: Model & {
				Body: MeshPart & {
					["Foot.R"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							["wing.R"]: Bone;
							tail: Bone;
							["wing.L"]: Bone;
							Head: Bone & {
								feather: Bone;
							};
						};
					};
					["Foot.L"]: Bone;
				};
			};
			["5_terror_bird"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Neck_01: Bone & {
								Neck_02: Bone & {
									Head: Bone;
								};
							};
							wing_R: Bone;
							tail_01: Bone;
							Foot_L: Bone;
							Foot_R: Bone;
							wing_L: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Terror_Bird_5_Initial: CFrameValue;
					Body_Original: CFrameValue;
					tail_01_Composited: CFrameValue;
					Neck_01_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					wing_end_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					wing_L_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					wing_end_L_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					wing_L_Composited: CFrameValue;
					tail_01_end_Initial: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					tail_01_Initial: CFrameValue;
					Neck_02_Composited: CFrameValue;
					wing_R_Original: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					tail_01_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Neck_02_Original: CFrameValue;
					wing_R_Composited: CFrameValue;
					wing_L_Initial: CFrameValue;
					wing_end_R_Initial: CFrameValue;
					wing_end_R_Original: CFrameValue;
					wing_R_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					tail_01_end_Original: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Terror_Bird_5_Original: CFrameValue;
					Terror_Bird_5_Composited: CFrameValue;
					tail_01_end_Composited: CFrameValue;
					wing_end_L_Initial: CFrameValue;
					Neck_02_Initial: CFrameValue;
					wing_end_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Neck_01_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Neck_01_Composited: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["2_coelodonta"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail1: Bone & {
								Tail2: Bone;
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					["FFoot.R_end_Original"]: CFrameValue;
					Coelodonta_2_Composited: CFrameValue;
					Body_Original: CFrameValue;
					["BFoot.R_end_Composited"]: CFrameValue;
					["BFoot.R_end_Initial"]: CFrameValue;
					["FFoot.R_end_Composited"]: CFrameValue;
					RootPart_Original: CFrameValue;
					["FFoot.R_end_Initial"]: CFrameValue;
					Tail1_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail1_Initial: CFrameValue;
					Coelodonta_2_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					["BFoot.R_end_Original"]: CFrameValue;
					Tail2_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail2_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Coelodonta_2_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Tail2_Initial: CFrameValue;
					Tail1_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["07_bracho"]: Model & {
				Body: MeshPart;
			};
			["7_guardian_dog"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							Chain_01: Bone & {
								Chain_02: Bone;
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone;
							};
						};
					};
				};
				InitialPoses: Folder & {
					Chain_01_Original: CFrameValue;
					Chain_02_Initial: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Guardian_Dog_7_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Chain_02_Original: CFrameValue;
					Guardian_Dog_7_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Chain_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Chain_02_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Chain_01_Composited: CFrameValue;
					Head_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Guardian_Dog_7_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["13_bearded_dragon"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone & {
												Tail_06: Bone & {
													Tail_07: Bone & {
														Tail_08: Bone & {
															Tail_09: Bone & {
																Tail_10: Bone & {
																	Tail_11: Bone;
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Tail_11_Composited: CFrameValue;
					Bearded_Dragon_13_Composited: CFrameValue;
					Tail_01_Original: CFrameValue;
					Bearded_Dragon_13_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Tail_09_Composited: CFrameValue;
					Tail_05_Initial: CFrameValue;
					Tail_10_Composited: CFrameValue;
					Tail_06_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_07_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_05_Original: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					Tail_09_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_05_Composited: CFrameValue;
					Tail_08_Composited: CFrameValue;
					Tail_10_Original: CFrameValue;
					Tail_08_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_08_Initial: CFrameValue;
					Tail_11_Original: CFrameValue;
					joint10_Initial: CFrameValue;
					Tail_10_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Tail_11_Initial: CFrameValue;
					Tail_04_Initial: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Bearded_Dragon_13_Original: CFrameValue;
					joint10_Composited: CFrameValue;
					Tail_06_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					joint10_Original: CFrameValue;
					Tail_07_Composited: CFrameValue;
					Tail_06_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					Tail_03_Original: CFrameValue;
					Tail_07_Original: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Tail_04_Composited: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Tail_09_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["16_sphinx"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Sphinx_16_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Sphinx_16_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Sphinx_16_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["8_imagotaria"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Hand_L: Bone & {
								Hand_02_L: Bone;
							};
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone;
										};
									};
								};
							};
							Hand_R: Bone & {
								Hand_02_R: Bone;
							};
							Head: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Hand_End_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Hand_02_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Hand_R_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Hand_02_R_Original: CFrameValue;
					Hand_End_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_End_L_Initial: CFrameValue;
					Hand_End_L_Original: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Hand_End_L_Composited: CFrameValue;
					Hand_02_L_Composited: CFrameValue;
					Hand_02_R_Initial: CFrameValue;
					Hand_02_L_Initial: CFrameValue;
					Imagotaria_8_Original: CFrameValue;
					Tail_end_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_05_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Tail_end_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_End_R_Initial: CFrameValue;
					Hand_02_R_Composited: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_end_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Hand_R_Composited: CFrameValue;
					Imagotaria_8_Composited: CFrameValue;
					Tail_end_L_Original: CFrameValue;
					Tail_end_R_Initial: CFrameValue;
					Tail_end_L_Composited: CFrameValue;
					Imagotaria_8_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Tail_05_Initial: CFrameValue;
					Tail_05_Composited: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["14_horned_cobra"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Head: Bone & {
							Neck: Bone & {
								Body_01: Bone & {
									Body_02: Bone & {
										Body_03: Bone & {
											Body_04: Bone & {
												Body_05: Bone & {
													Body_06: Bone & {
														Body_07: Bone & {
															Tail_01: Bone & {
																Tail_02: Bone & {
																	Tail_03: Bone & {
																		Tail_04: Bone;
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Body_06_Composited: CFrameValue;
					Neck_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Body_02_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Body_03_Composited: CFrameValue;
					Horned_Cobra_14_Initial: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Body_05_Initial: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Body_06_Original: CFrameValue;
					Body_01_Initial: CFrameValue;
					Horned_Cobra_14_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Neck_Initial: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Body_04_Initial: CFrameValue;
					Body_02_Composited: CFrameValue;
					Body_04_Original: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Body_05_Composited: CFrameValue;
					Body_03_Original: CFrameValue;
					Body_05_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Body_07_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Body_02_Initial: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Head_Original: CFrameValue;
					Body_07_Original: CFrameValue;
					Body_04_Composited: CFrameValue;
					Body_01_Original: CFrameValue;
					Body_07_Composited: CFrameValue;
					Neck_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_06_Initial: CFrameValue;
					Body_03_Initial: CFrameValue;
					Body_01_Composited: CFrameValue;
					Horned_Cobra_14_Composited: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["01_sabertooth"]: Model & {
				Body: MeshPart & {
					["BLeg.L"]: Bone;
					["FLeg.R"]: Bone;
					["FLeg.L"]: Bone;
					tail: Bone & {
						["tail.001"]: Bone & {
							["tail.002"]: Bone & {
								["tail.003"]: Bone & {
									["tail.004"]: Bone;
								};
							};
						};
					};
					["BLeg.R"]: Bone;
					body: Bone & {
						head: Bone;
					};
				};
			};
			["9_guardian_crocodile"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone & {
								Foot_end_L: Bone;
							};
							wing_R: Bone;
							Head: Bone;
							wing_L: Bone;
							Foot_R: Bone & {
								Foot_end_R: Bone;
							};
							tail_01: Bone & {
								tail_02: Bone & {
									tail_end: Bone;
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Body_Original: CFrameValue;
					tail_02_Original: CFrameValue;
					tail_01_Composited: CFrameValue;
					wing_R_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					wing_end_R_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					wing_L_Original: CFrameValue;
					tail_02_Initial: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					wing_end_L_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					Guardian_Crocodile_9_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					wing_R_Original: CFrameValue;
					tail_end_Initial: CFrameValue;
					tail_01_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Guardian_Crocodile_9_Original: CFrameValue;
					wing_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					wing_L_Initial: CFrameValue;
					wing_L_Composited: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					tail_02_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					tail_01_Initial: CFrameValue;
					Body_Initial: CFrameValue;
					tail_end_Composited: CFrameValue;
					wing_end_R_Initial: CFrameValue;
					wing_end_R_Original: CFrameValue;
					wing_end_L_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					wing_end_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					tail_end_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Guardian_Crocodile_9_Composited: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["3_glyptodon"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Head: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					["FFoot.R_end_Original"]: CFrameValue;
					Body_Original: CFrameValue;
					Glyptodon_3_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					["BFoot.R_end_Initial"]: CFrameValue;
					["FFoot.R_end_Composited"]: CFrameValue;
					RootPart_Original: CFrameValue;
					["FFoot.R_end_Initial"]: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Glyptodon_3_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					["BFoot.R_end_Original"]: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					["BFoot.R_end_Composited"]: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					Glyptodon_3_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					Head_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["15_stripped_owl"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Head: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					ra_15_Composited: CFrameValue;
					Foot_L_Composited: CFrameValue;
					ra_15_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					ra_15_Original: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["6_behemotops"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone;
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Behemotops_6_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Behemotops_6_Composited: CFrameValue;
					RootPart_Composited: CFrameValue;
					Behemotops_6_Initial: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["10_giant_crab"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_03_R: Bone & {
								Foot_end_03_R: Bone;
							};
							Eye_R: Bone & {
								Eye_End_R: Bone;
							};
							Foot_03_L: Bone & {
								Foot_end_03_L: Bone;
							};
							Foot_02_R: Bone & {
								Foot_end_02_R: Bone;
							};
							Eye_L: Bone & {
								Eye_End_L: Bone;
							};
							Claws_L: Bone & {
								Claws_Lower_L: Bone;
							};
							Foot_01_L: Bone & {
								Foot_end_01_L: Bone;
							};
							Foot_01_R: Bone & {
								Foot_end_01_R: Bone;
							};
							Foot_02_L: Bone & {
								Foot_end_02_L: Bone;
							};
							Claws_R: Bone & {
								Claws_Lower_R: Bone;
							};
							Shell: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Claws_Lower_R_Composited: CFrameValue;
					Eye_L_Initial: CFrameValue;
					Eye_End_R_Initial: CFrameValue;
					Eye_End_L_Composited: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_02_L_Initial: CFrameValue;
					Foot_01_R_Original: CFrameValue;
					Foot_01_L_Original: CFrameValue;
					Claws_L_Original: CFrameValue;
					Foot_02_R_Composited: CFrameValue;
					Foot_02_L_Composited: CFrameValue;
					Claws_R_Initial: CFrameValue;
					Foot_end_03_R_Composited: CFrameValue;
					Claws_L_Composited: CFrameValue;
					Eye_R_Composited: CFrameValue;
					Giant_Crab_10_Composited: CFrameValue;
					Foot_03_R_Initial: CFrameValue;
					Eye_End_R_Original: CFrameValue;
					Claws_Lower_L_Original: CFrameValue;
					Body_Initial: CFrameValue;
					Foot_01_L_Composited: CFrameValue;
					Foot_end_01_L_Original: CFrameValue;
					Giant_Crab_10_Initial: CFrameValue;
					Foot_end_03_L_Original: CFrameValue;
					Foot_03_L_Initial: CFrameValue;
					Body_Original: CFrameValue;
					Shell_Original: CFrameValue;
					Foot_03_L_Original: CFrameValue;
					Foot_end_02_R_Initial: CFrameValue;
					Claws_L_Initial: CFrameValue;
					Claws_Lower_R_Original: CFrameValue;
					Claws_Lower_L_Composited: CFrameValue;
					Foot_end_02_L_Original: CFrameValue;
					Eye_L_Composited: CFrameValue;
					Eye_R_Initial: CFrameValue;
					Foot_02_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_end_03_R_Initial: CFrameValue;
					Claws_Lower_L_Initial: CFrameValue;
					Foot_end_03_L_Initial: CFrameValue;
					Foot_02_L_Original: CFrameValue;
					Foot_end_02_L_Initial: CFrameValue;
					Foot_end_01_R_Initial: CFrameValue;
					Foot_03_R_Original: CFrameValue;
					Giant_Crab_10_Original: CFrameValue;
					Foot_02_R_Initial: CFrameValue;
					Foot_01_R_Initial: CFrameValue;
					Foot_end_02_R_Composited: CFrameValue;
					Claws_R_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_02_R_Original: CFrameValue;
					Eye_End_R_Composited: CFrameValue;
					Eye_End_L_Original: CFrameValue;
					Shell_Composited: CFrameValue;
					Foot_03_L_Composited: CFrameValue;
					Shell_Initial: CFrameValue;
					Foot_end_02_L_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Claws_R_Composited: CFrameValue;
					Foot_03_R_Composited: CFrameValue;
					Eye_End_L_Initial: CFrameValue;
					Foot_end_01_L_Initial: CFrameValue;
					Foot_end_03_L_Composited: CFrameValue;
					Foot_01_R_Composited: CFrameValue;
					Foot_end_01_L_Composited: CFrameValue;
					Foot_01_L_Initial: CFrameValue;
					Foot_end_03_R_Original: CFrameValue;
					Foot_end_01_R_Composited: CFrameValue;
					Foot_end_01_R_Original: CFrameValue;
					Eye_R_Original: CFrameValue;
					Claws_Lower_R_Initial: CFrameValue;
					Eye_L_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["02_triceratops"]: Model & {
				Body: MeshPart & {
					Root: Bone & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						["BLeg.R"]: Bone;
						Body: Bone & {
							head: Bone;
							["Body.001"]: Bone & {
								["Body.002"]: Bone & {
									["Body.003"]: Bone & {
										["Body.004"]: Bone & {
											["Body.005"]: Bone;
										};
									};
								};
							};
						};
					};
				};
			};
			["1_castoroides"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
							FFoot_R: Bone;
							FFoot_L: Bone;
							Heat: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Castoroides_1_Initial: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Castoroides_1_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Tail_02_Original: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Heat_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Heat_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					Castoroides_1_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					Heat_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["12_leon_desert"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone;
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					Leon_Desert_12_Initial: CFrameValue;
					RootPart_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					RootPart_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					Leon_Desert_12_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					Leon_Desert_12_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["17_anubis"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
							Neck: Bone & {
								Head: Bone;
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Neck_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Anubis_17_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Neck_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Hand_L_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Foot_L_Original: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Anubis_17_Composited: CFrameValue;
					Neck_Composited: CFrameValue;
					Anubis_17_Initial: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["09_stego"]: Model & {
				Body: MeshPart & {
					["FFoot.L"]: Bone;
					["BFoot.R"]: Bone;
					["BFoot.L"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							Neck: Bone & {
								Neck2: Bone & {
									Heat: Bone;
								};
							};
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.004"]: Bone & {
											["Tail.005"]: Bone;
										};
									};
								};
							};
						};
					};
					["FFoot.R"]: Bone;
				};
			};
			["08_trex"]: Model & {
				Body: MeshPart & {
					Root: Bone & {
						Body: Bone & {
							head: Bone;
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.003"]: Bone & {
											["Tail.004"]: Bone & {
												["Tail.005"]: Bone;
											};
										};
									};
								};
							};
							["Hand.L"]: Bone;
							["Hand.R"]: Bone;
						};
					};
					["Leg.L"]: Bone;
					["Leg.R"]: Bone;
				};
			};
			["05_black_velo"]: Model & {
				BodyOld: MeshPart & {
					Root: Bone & {
						Body: Bone & {
							["Leg.L"]: Bone;
							["Hand.L"]: Bone;
							head: Bone;
							Tail: Bone & {
								["Tail.001"]: Bone & {
									["Tail.002"]: Bone & {
										["Tail.003"]: Bone & {
											["Tail.004"]: Bone;
										};
									};
								};
							};
							["Leg.R"]: Bone;
							["Hand.R"]: Bone;
						};
					};
				};
				Body: MeshPart;
			};
			["18_spirit_bear"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Hand_R: Bone;
							Head: Bone;
							Hand_L: Bone;
							Foot_R: Bone;
							Tail_01: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Hand_L_Original: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Spirit_Bear_18_Composited: CFrameValue;
					Hand_R_Original: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Hand_end_R_Composited: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Hand_R_Initial: CFrameValue;
					Foot_L_Original: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
					Hand_end_L_Original: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Hand_end_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Hand_L_Composited: CFrameValue;
					Hand_R_Composited: CFrameValue;
					Hand_end_R_Initial: CFrameValue;
					Hand_L_Initial: CFrameValue;
					RootPart_Initial: CFrameValue;
					Spirit_Bear_18_Original: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					Hand_end_L_Composited: CFrameValue;
					Spirit_Bear_18_Initial: CFrameValue;
					Hand_end_R_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["04_dino"]: Model & {
				Body: MeshPart & {
					["Foot.R"]: Bone;
					RootPart: Bone & {
						Body: Bone & {
							["wingP1.R"]: Bone & {
								["wingP2.R"]: Bone & {
									["wingP3.R"]: Bone & {
										["wingP4.R"]: Bone & {
											["wingP5.R"]: Bone & {
												["wingP6.R"]: Bone & {
													["wingP7.R"]: Bone & {
														["wingP8.R"]: Bone & {
															["wingP9.R"]: Bone;
														};
													};
												};
											};
										};
									};
								};
							};
							Heat: Bone;
							["wingP1.L"]: Bone & {
								["wingP2.L"]: Bone & {
									["wingP3.L"]: Bone & {
										["wingP4.L"]: Bone & {
											["wingP5.L"]: Bone & {
												["wingP6.L"]: Bone & {
													["wingP7.L"]: Bone & {
														["wingP8.L"]: Bone & {
															["wingP9.L"]: Bone;
														};
													};
												};
											};
										};
									};
								};
							};
							Tail1: Bone & {
								Tail2: Bone & {
									Tail3: Bone & {
										Tail4: Bone;
									};
								};
							};
						};
					};
					["Foot.L"]: Bone;
				};
			};
			["4_megatherium"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone;
									};
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Megatherium_4_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Megatherium_4_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					BFoot_R_Original: CFrameValue;
					FFoot_L_Original: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					FFoot_R_Original: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					Tail_03_Original: CFrameValue;
					BFoot_L_Original: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Megatherium_4_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["19_spirit_owl"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Foot_L: Bone;
							Wing_R: Bone & {
								Wing_end_R: Bone;
							};
							Head: Bone;
							Foot_R: Bone;
							Wing_L: Bone & {
								Wing_end_L: Bone;
							};
						};
					};
				};
				InitialPoses: Folder & {
					Foot_L_Original: CFrameValue;
					Wing_R_Original: CFrameValue;
					Spirit_Owl_19_Composited: CFrameValue;
					Wing_end_R_Original: CFrameValue;
					Wing_end_R_Initial: CFrameValue;
					Wing_R_Composited: CFrameValue;
					Foot_end_R_Initial: CFrameValue;
					Body_Composited: CFrameValue;
					Foot_R_Composited: CFrameValue;
					Spirit_Owl_19_Initial: CFrameValue;
					Foot_end_L_Initial: CFrameValue;
					Wing_end_L_Initial: CFrameValue;
					Foot_R_Original: CFrameValue;
					Spirit_Owl_19_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_L_Composited: CFrameValue;
					Head_Initial: CFrameValue;
					Foot_L_Initial: CFrameValue;
					Foot_R_Initial: CFrameValue;
					Wing_end_R_Composited: CFrameValue;
					Wing_end_L_Original: CFrameValue;
					Foot_end_L_Original: CFrameValue;
					Wing_R_Initial: CFrameValue;
					Wing_L_Initial: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Head_Original: CFrameValue;
					Wing_L_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Wing_end_L_Composited: CFrameValue;
					Foot_end_R_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Wing_L_Composited: CFrameValue;
					Foot_end_L_Composited: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["06_mamuth"]: Model & {
				Body: MeshPart & {
					Rootpart: Bone & {
						["BLeg.L"]: Bone;
						["FLeg.R"]: Bone;
						["FLeg.L"]: Bone;
						["BLeg.R"]: Bone;
						Body: Bone & {
							Head: Bone & {
								tronk: Bone & {
									["tronk.001"]: Bone & {
										["tronk.002"]: Bone & {
											["tronk.003"]: Bone;
										};
									};
								};
							};
							tail: Bone & {
								["tail.001"]: Bone & {
									["tail.002"]: Bone & {
										["tail.003"]: Bone & {
											["tail.004"]: Bone & {
												["tail.005"]: Bone & {
													["tail.006"]: Bone;
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
			["11_scorpion"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							Claws_L: Bone & {
								Claws_Lower_L: Bone;
							};
							Foot_03_L: Bone & {
								Foot_end_03_L: Bone;
							};
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Sting: Bone;
									};
								};
							};
							Foot_02_R: Bone & {
								Foot_end_02_R: Bone;
							};
							Foot_01_L: Bone & {
								Foot_end_01_L: Bone;
							};
							Foot_03_R: Bone & {
								Foot_end_03_R: Bone;
							};
							Foot_01_R: Bone & {
								Foot_end_01_R: Bone;
							};
							Foot_02_L: Bone & {
								Foot_end_02_L: Bone;
							};
							Claws_R: Bone & {
								Claws_Lower_R: Bone;
							};
							Head: Bone;
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Claws_Lower_R_Composited: CFrameValue;
					Claws_Lower_L_Initial: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Scorpion_11_Initial: CFrameValue;
					Claws_R_Composited: CFrameValue;
					Foot_01_L_Original: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Claws_L_Original: CFrameValue;
					Foot_02_R_Composited: CFrameValue;
					Foot_02_L_Composited: CFrameValue;
					Claws_R_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					Tail_01_Composited: CFrameValue;
					Sting_Original: CFrameValue;
					Foot_end_03_L_Initial: CFrameValue;
					Claws_Lower_L_Original: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Scorpion_11_Original: CFrameValue;
					Foot_end_01_L_Original: CFrameValue;
					Foot_03_R_Composited: CFrameValue;
					Foot_end_03_L_Original: CFrameValue;
					Foot_01_R_Initial: CFrameValue;
					Body_Original: CFrameValue;
					Sting_Composited: CFrameValue;
					Foot_03_L_Original: CFrameValue;
					Foot_end_02_R_Initial: CFrameValue;
					Claws_L_Initial: CFrameValue;
					Claws_Lower_R_Original: CFrameValue;
					Claws_Lower_L_Composited: CFrameValue;
					Foot_end_02_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					Foot_end_03_L_Composited: CFrameValue;
					Foot_02_R_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					Foot_end_03_R_Initial: CFrameValue;
					Foot_03_L_Initial: CFrameValue;
					Foot_03_L_Composited: CFrameValue;
					Foot_02_L_Original: CFrameValue;
					Foot_end_02_L_Initial: CFrameValue;
					Foot_end_01_R_Initial: CFrameValue;
					Foot_03_R_Original: CFrameValue;
					Foot_end_01_R_Composited: CFrameValue;
					Foot_02_R_Initial: CFrameValue;
					Foot_end_02_L_Composited: CFrameValue;
					Foot_01_R_Composited: CFrameValue;
					Claws_R_Original: CFrameValue;
					RootPart_Initial: CFrameValue;
					Foot_end_02_R_Original: CFrameValue;
					Foot_02_L_Initial: CFrameValue;
					Tail_03_Original: CFrameValue;
					Foot_end_03_R_Original: CFrameValue;
					Foot_end_03_R_Composited: CFrameValue;
					Foot_end_01_L_Initial: CFrameValue;
					Foot_01_R_Original: CFrameValue;
					Tail_03_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					Foot_end_01_L_Composited: CFrameValue;
					Foot_01_L_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					Foot_01_L_Composited: CFrameValue;
					Claws_Lower_R_Initial: CFrameValue;
					Claws_L_Composited: CFrameValue;
					Foot_end_01_R_Original: CFrameValue;
					Foot_03_R_Initial: CFrameValue;
					Sting_Initial: CFrameValue;
					Scorpion_11_Composited: CFrameValue;
					Foot_end_02_R_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
			["20_spirit_wolf"]: Model & {
				AnimationController: AnimationController;
				Body: MeshPart & {
					RootPart: Bone & {
						Body: Bone & {
							BFoot_R: Bone;
							BFoot_L: Bone;
							Head: Bone;
							FFoot_R: Bone;
							FFoot_L: Bone;
							Tail_01: Bone & {
								Tail_02: Bone & {
									Tail_03: Bone & {
										Tail_04: Bone & {
											Tail_05: Bone & {
												Tail_06: Bone;
											};
										};
									};
								};
							};
						};
					};
				};
				InitialPoses: Folder & {
					Head_Original: CFrameValue;
					Tail_07_Composited: CFrameValue;
					Tail_06_Composited: CFrameValue;
					BFoot_end_R_Composited: CFrameValue;
					Body_Original: CFrameValue;
					Tail_01_Original: CFrameValue;
					RootPart_Original: CFrameValue;
					Tail_05_Composited: CFrameValue;
					Body_Composited: CFrameValue;
					Tail_02_Composited: CFrameValue;
					FFoot_L_Original: CFrameValue;
					Tail_04_Original: CFrameValue;
					BFoot_end_L_Original: CFrameValue;
					Tail_01_Initial: CFrameValue;
					FFoot_end_L_Original: CFrameValue;
					Spirit_Wolf_20_Initial: CFrameValue;
					Tail_03_Initial: CFrameValue;
					Tail_05_Original: CFrameValue;
					Spirit_Wolf_20_Composited: CFrameValue;
					BFoot_L_Initial: CFrameValue;
					BFoot_L_Original: CFrameValue;
					RootPart_Composited: CFrameValue;
					BFoot_L_Composited: CFrameValue;
					FFoot_R_Original: CFrameValue;
					Tail_04_Composited: CFrameValue;
					Tail_04_Initial: CFrameValue;
					Tail_06_Original: CFrameValue;
					FFoot_end_R_Original: CFrameValue;
					FFoot_L_Initial: CFrameValue;
					Tail_06_Initial: CFrameValue;
					Tail_07_Initial: CFrameValue;
					FFoot_L_Composited: CFrameValue;
					Tail_02_Original: CFrameValue;
					Tail_01_Composited: CFrameValue;
					RootPart_Initial: CFrameValue;
					Head_Initial: CFrameValue;
					BFoot_end_R_Original: CFrameValue;
					Tail_03_Original: CFrameValue;
					Tail_07_Original: CFrameValue;
					Spirit_Wolf_20_Original: CFrameValue;
					BFoot_R_Initial: CFrameValue;
					FFoot_R_Composited: CFrameValue;
					Tail_03_Composited: CFrameValue;
					BFoot_R_Original: CFrameValue;
					BFoot_R_Composited: CFrameValue;
					Head_Composited: CFrameValue;
					Body_Initial: CFrameValue;
					Tail_02_Initial: CFrameValue;
					FFoot_end_R_Composited: CFrameValue;
					FFoot_end_L_Composited: CFrameValue;
					FFoot_end_R_Initial: CFrameValue;
					FFoot_R_Initial: CFrameValue;
					FFoot_end_L_Initial: CFrameValue;
					BFoot_end_L_Composited: CFrameValue;
					BFoot_end_R_Initial: CFrameValue;
					Tail_05_Initial: CFrameValue;
					BFoot_end_L_Initial: CFrameValue;
				};
				AnimSaves: Model & {
					idle: KeyframeSequence;
					jump: KeyframeSequence;
				};
			};
		};
		BoxPets: Folder & {
			dolphin: Model & {
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Sphere.001"]: MeshPart;
				Sphere: MeshPart;
				["Plane.001"]: MeshPart;
			};
			buffalo: Model & {
				Cylinder: MeshPart;
				["outer eye"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				Cube: MeshPart & {
					Weld: Weld;
				};
				["Roundcube.001"]: MeshPart;
				Roundcube: MeshPart;
				Plane: MeshPart;
				["inner eye"]: MeshPart;
			};
			fox: Model & {
				noise: MeshPart;
				Plane: MeshPart;
				["outer ear.001"]: MeshPart;
				["inner ear .001"]: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["outer eye"]: MeshPart;
				["Cube.001"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			monkey: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.010"]: MeshPart;
				["Cube.009"]: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["Cube.004"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["Cube.002"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["outer eye.001"]: MeshPart;
				["Cube.006"]: MeshPart;
				Cylinder: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cube.005"]: MeshPart;
				["Cube.008"]: MeshPart;
				["inner eye"]: MeshPart;
			};
			scorpion: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.005"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			squirrel: Model & {
				["Cylinder.001"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["Cube.006"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.001"]: MeshPart;
			};
			Reindeer: Model & {
				["Cylinder.006"]: MeshPart;
				["Roundcube.001"]: MeshPart;
				["inner eye 2.001"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Roundcube.002"]: MeshPart;
			};
			fish: Model & {
				["Cube.007"]: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.001"]: MeshPart;
				["Cube.015"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.011"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.001"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.003"]: MeshPart & {
					Weld: Weld;
				};
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				Model: Model & {
					["Cube.006"]: MeshPart & {
						Weld: Weld;
					};
					Cube: MeshPart & {
						Weld: Weld;
					};
					["Cube.014"]: MeshPart & {
						Weld: Weld;
					};
					["Cube.002"]: MeshPart & {
						Weld: Weld;
					};
					["Cube.012"]: MeshPart & {
						Weld: Weld;
					};
					["Cube.004"]: MeshPart & {
						Weld: Weld;
					};
					["Cube.008"]: MeshPart & {
						Weld: Weld;
					};
					["Cube.010"]: MeshPart & {
						Weld: Weld;
					};
				};
				["Cube.005"]: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.003"]: MeshPart;
				["Cube.013"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.009"]: MeshPart & {
					Weld: Weld;
				};
			};
			fawn: Model & {
				["Cylinder.001"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				["Cylinder.008"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["Cylinder.007"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Cylinder.004"]: MeshPart;
			};
			["snow ram"]: Model & {
				noise: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				Cube: MeshPart;
			};
			wolf: Model & {
				["Cylinder.001"]: MeshPart;
				Plane: MeshPart;
				["outer ear.001"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["inner ear .001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			chicken: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Plane.001"]: MeshPart;
				Plane: MeshPart;
				["Plane.002"]: MeshPart;
			};
			spider: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				Plane: MeshPart;
				["Cube.001"]: MeshPart & {
					Weld: Weld;
				};
			};
			walrus: Model & {
				["Cylinder.006"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cylinder.004"]: MeshPart;
				["Cube.002"]: MeshPart & {
					Weld: Weld;
				};
			};
			seal: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				Plane: MeshPart;
				["inner eye"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.003"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["inner eye 2"]: MeshPart;
				["outer eye 2"]: MeshPart;
				["Cube.001"]: MeshPart;
			};
			raccoon: Model & {
				["Cylinder.001"]: MeshPart;
				["outer eye 2"]: MeshPart;
				["inner eye"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cube.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cube.006"]: MeshPart;
				["inner eye.001"]: MeshPart;
				Plane: MeshPart;
			};
			rat: Model & {
				noise: MeshPart;
				["inner eye 2.001"]: MeshPart;
				["inner eye"]: MeshPart;
				Cylinder: MeshPart;
				["nose.001"]: MeshPart;
				["inner eye 2.002"]: MeshPart;
				["noise.002"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["inner eye 2"]: MeshPart;
				["noise.001"]: MeshPart;
				Roundcube: MeshPart;
			};
			bee: Model & {
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				["Cylinder.004"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
			};
			hippo: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Cylinder.009"]: MeshPart;
				["Cube.001"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.014"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["Cube.002"]: MeshPart;
				["Cylinder.012"]: MeshPart;
				["Cylinder.015"]: MeshPart;
				["Cylinder.013"]: MeshPart;
				["Cylinder.007"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["inner eye"]: MeshPart;
				["outer eye.001"]: MeshPart;
				["Cylinder.016"]: MeshPart;
				["Cylinder.011"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.010"]: MeshPart;
				["Cylinder.004"]: MeshPart;
				["Cylinder.008"]: MeshPart;
			};
			snake: Model & {
				["outer eye"]: MeshPart;
				["Plane.003"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				Roundcube: MeshPart;
				Plane: MeshPart;
				["inner eye"]: MeshPart;
			};
			flamingo: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.001"]: MeshPart;
				["Plane.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Plane: MeshPart;
				["Cylinder.004"]: MeshPart;
			};
			ant: Model & {
				["Cylinder.001"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Cube: MeshPart;
			};
			bear: Model & {
				["outer eye"]: MeshPart;
				["Cube.003"]: MeshPart;
				Sphere: MeshPart;
				["outer eye 2"]: MeshPart;
				["inner eye"]: MeshPart;
				["outer eye.001"]: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["Cube.001"]: MeshPart;
				nose: MeshPart;
				["inner eye 2"]: MeshPart;
				Plane: MeshPart;
				["Cube.002"]: MeshPart;
			};
			bull: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart;
				Plane: MeshPart;
				["inner eye"]: MeshPart;
				["outer eye.001"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["inner eye.001"]: MeshPart;
				["Cube.001"]: MeshPart;
			};
			owl: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				["Cylinder.001"]: MeshPart;
				Model: Model & {
					["Cylinder.007"]: MeshPart;
					["Cylinder.012"]: MeshPart;
					["Cylinder.008"]: MeshPart;
					["Cylinder.009"]: MeshPart;
					["Cylinder.013"]: MeshPart;
					["Cylinder.011"]: MeshPart;
				};
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cylinder.010"]: MeshPart;
				["Cylinder.004"]: MeshPart;
			};
			snowman: Model & {
				Cylinder: MeshPart;
				["Cube.006"]: MeshPart;
				Cube: MeshPart & {
					Weld: Weld;
				};
				["Cube.005"]: MeshPart;
				["Cube.003"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			["wight bear"]: Model & {
				["outer eye"]: MeshPart;
				["Cube.003"]: MeshPart;
				["outer eye.003"]: MeshPart;
				["outer eye.004"]: MeshPart;
				Sphere: MeshPart;
				["outer eye 2"]: MeshPart;
				["inner eye"]: MeshPart;
				["outer eye.001"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.001"]: MeshPart;
				nose: MeshPart;
				["inner eye 2"]: MeshPart;
				Plane: MeshPart;
				["Cube.002"]: MeshPart;
			};
			bat: Model & {
				["outer eye"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["Cube.001"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cone.001"]: MeshPart;
				nose: MeshPart;
				["Cube.004"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			penguin: Model & {
				["Cylinder.001"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cube.008"]: MeshPart;
				Cube: MeshPart;
			};
			camel: Model & {
				Cylinder: MeshPart;
				Cube: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Plane: MeshPart;
				["Cube.001"]: MeshPart & {
					Weld: Weld;
				};
			};
			panda: Model & {
				["Roundcube.001"]: MeshPart;
				["Cylinder.007"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["outer eye.002"]: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["outer eye.003"]: MeshPart;
				nose: MeshPart;
				["Cube.004"]: MeshPart;
				["inner eye.001"]: MeshPart;
				Sphere: MeshPart;
			};
			peacock: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				["inner eye.002"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Plane.001"]: MeshPart;
				["inner eye.001"]: MeshPart;
				["Plane.005"]: MeshPart;
				["Cylinder.011"]: MeshPart;
				["Plane.004"]: MeshPart;
				["Plane.003"]: MeshPart;
				["Plane.002"]: MeshPart;
				["Cylinder.007"]: MeshPart;
				Plane: MeshPart;
				["Plane.006"]: MeshPart;
				["outer eye.001"]: MeshPart;
				["Cylinder.010"]: MeshPart;
				["Cylinder.009"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.008"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Cylinder: MeshPart;
			};
			parrot: Model & {
				["Cylinder.010"]: MeshPart;
				["Cylinder.008"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.003"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.005"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			eagle: Model & {
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.001"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cylinder.004"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			dog: Model & {
				["Roundcube.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cube.005"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			goldenpeacock: Model & {
				["outer eye"]: MeshPart;
				["Cylinder.006"]: MeshPart;
				["Plane.003"]: MeshPart;
				["Plane.004"]: MeshPart;
				["Cylinder.007"]: MeshPart;
				Plane: MeshPart;
				["Plane.006"]: MeshPart;
				["Cylinder.010"]: MeshPart;
				["Cylinder.011"]: MeshPart;
				["Cylinder.009"]: MeshPart;
				["Cylinder.005"]: MeshPart;
				["Cylinder.008"]: MeshPart;
				["Cylinder.003"]: MeshPart & {
					Weld: Weld;
				};
				["inner eye.001"]: MeshPart;
				["Plane.001"]: MeshPart;
			};
			["desert snake"]: Model & {
				["outer eye"]: MeshPart;
				["Plane.003"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				Roundcube: MeshPart;
				Plane: MeshPart;
				["inner eye"]: MeshPart;
			};
			cat: Model & {
				noise: MeshPart;
				["Cylinder.001"]: MeshPart;
				taill: MeshPart;
				["taill.001"]: MeshPart;
				["outer ear.001"]: MeshPart;
				["inner ear .001"]: MeshPart;
				Roundcube: MeshPart;
				["Cylinder.003"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
			};
			["ray fish"]: Model & {
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				Cube: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Plane.001"]: MeshPart;
				["Cylinder.004"]: MeshPart;
				["Cylinder.003"]: MeshPart;
			};
			worm: Model & {
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.001"]: MeshPart;
				Cube: MeshPart;
				Plane: MeshPart;
				["Roundcube.002"]: MeshPart & {
					Weld: Weld;
				};
			};
			ladybug: Model & {
				["Cylinder.001"]: MeshPart;
				["Roundcube.001"]: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.005"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart & {
					Weld: Weld;
				};
			};
			butterfly: Model & {
				["Cylinder.001"]: MeshPart;
				["Cube.001"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.010"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.013"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.002"]: MeshPart;
				["Cube.007"]: MeshPart;
				["Cube.011"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["Cube.014"]: MeshPart;
				["Cube.012"]: MeshPart;
				["Cube.009"]: MeshPart;
				["Cube.005"]: MeshPart & {
					Weld: Weld;
				};
				["Cube.008"]: MeshPart;
				["Cube.006"]: MeshPart;
			};
			dragon: Model & {
				["Cylinder.001"]: MeshPart;
				["Cube.001"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cone.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				Plane: MeshPart;
				["Cube.002"]: MeshPart;
			};
			shark: Model & {
				["Cylinder.001"]: MeshPart;
				Cube: MeshPart;
				Cone: MeshPart;
				["Cylinder.005"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.003"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Cone.001"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cone.002"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			rabbit: Model & {
				["outer eye"]: MeshPart;
				["outer ear"]: MeshPart;
				["outer eye 2"]: MeshPart;
				["outer ear.001"]: MeshPart;
				["inner ear .001"]: MeshPart;
				Roundcube: MeshPart;
				Sphere: MeshPart;
				["nose.001"]: MeshPart;
				nose: MeshPart;
				["inner eye 2"]: MeshPart;
				["inner eye"]: MeshPart;
				["inner ear "]: MeshPart;
			};
			elephant: Model & {
				["Cube.002"]: MeshPart;
				Sphere: MeshPart;
				Cube: MeshPart;
				["Sphere.002"]: MeshPart;
				["Sphere.003"]: MeshPart;
				["Sphere.001"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.003"]: MeshPart;
			};
			crocodile: Model & {
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cone.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cone.006"]: MeshPart;
			};
			axolotl: Model & {
				["Cube.007"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cylinder.001"]: MeshPart;
				["Cube.010"]: MeshPart;
				["Cube.009"]: MeshPart;
				["Cube.011"]: MeshPart;
				Plane: MeshPart;
				["Cube.003"]: MeshPart;
				["Cube.006"]: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cube.005"]: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cube.004"]: MeshPart;
				["Cube.008"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			horse: Model & {
				["Cylinder.001"]: MeshPart;
				Plane: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				Cube: MeshPart;
				["Cylinder.002"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				["Cube.001"]: MeshPart;
				["Cube.002"]: MeshPart;
			};
			["SUPER FOX"]: Model & {
				["outer eye"]: MeshPart;
				["Roundcube.002"]: MeshPart;
				["outer ear.001"]: MeshPart;
				["Cube.009"]: MeshPart;
				Roundcube: MeshPart;
				Cube: MeshPart;
				["inner eye.001"]: MeshPart;
				["outer ear.002"]: MeshPart;
				noise: MeshPart;
				["Roundcube.001"]: MeshPart;
				Plane: MeshPart;
				["outer eye.001"]: MeshPart;
				["outer eye.002"]: MeshPart;
				["inner ear .002"]: MeshPart;
				["inner eye.003"]: MeshPart;
				["inner eye.002"]: MeshPart;
				["Cube.008"]: MeshPart;
				["inner ear .001"]: MeshPart;
			};
			koala: Model & {
				["Cylinder.007"]: MeshPart;
				["Cube.001"]: MeshPart;
				Cylinder: MeshPart;
				Roundcube: MeshPart & {
					Weld: Weld;
				};
				["Cylinder.004"]: MeshPart;
				["Plane.001"]: MeshPart;
				["Cylinder.003"]: MeshPart;
				Plane: MeshPart;
				["Cube.002"]: MeshPart;
			};
		};
		vfx: Folder & {
			hoverTrail: ParticleEmitter;
			water_trails: Part & {
				effects: ParticleEmitter;
			};
			leafDrops: Part & {
				effects: ParticleEmitter;
			};
		};
	};
	hiden: Folder & {
		Assets: Folder & {
			SnowMountain: Model & {
				SnowMountainC: MeshPart;
				SnowRockA: MeshPart;
				SnowRockC: MeshPart;
				SnowMountainA: MeshPart;
				SnowMountainB: MeshPart;
				SnowRockB: MeshPart;
				SnowPineTrunk: Model & {
					PineTrunk: MeshPart;
					SnowTrunk: MeshPart;
				};
				SnowPineTree: MeshPart;
				SnowMountainD: MeshPart;
			};
			Trees: Folder & {
				MojaveTree: MeshPart;
				TreeA: MeshPart;
			};
			Plants: Folder & {
				Captus: MeshPart;
				Planta: MeshPart;
				Bush: MeshPart;
			};
			WaterFalls: Folder & {
				WaterFall: Model & {
					A: Part & {
						Attachment: Attachment;
					};
					B: Part & {
						LavaFlow: ParticleEmitter;
					};
				};
				["Water Flow"]: Model & {
					A: Part & {
						Attachment: Attachment & {
							Beam: Beam;
						};
					};
					B: Part & {
						Attachment: Attachment;
					};
				};
				Weaves: MeshPart & {
					["Particle 3"]: ParticleEmitter;
				};
				Water: Model & {
					WatterColor: Part & {
						Texture: Texture;
					};
					WatterEffect: MeshPart & {
						SurfaceAppearance: SurfaceAppearance;
					};
				};
			};
			Mountains: Folder & {
				Niagara: Folder & {
					NiagaraMountainB: MeshPart;
					NiagaraMountainD: MeshPart;
					NiagaraMountainA: MeshPart;
					NiagaraMountainC: MeshPart;
				};
				Mountains: Folder & {
					MountainA: MeshPart;
					MountainD: MeshPart;
					BackMountainA: MeshPart;
					BackMountainB: MeshPart;
					MountainB: MeshPart;
					MountainC: MeshPart;
				};
				Mojave: Folder & {
					["MojaveMountain-B"]: MeshPart;
					["MojaveMountain-A"]: MeshPart;
					["MojaveMountain-D"]: MeshPart;
					["MojaveMountain-C"]: MeshPart;
				};
				MountainA: Model & {
					mountainGrass: MeshPart;
					mountainEarth: MeshPart;
				};
				Canyon: Folder & {
					["BackCanyonMountain-C"]: MeshPart;
					["CanyonMountain-A"]: MeshPart;
					["BackCanyonMountain-B"]: MeshPart;
				};
			};
			FossilProps: Folder & {
				OpenChest: Model & {
					Bones2: MeshPart;
					ChestOpen: MeshPart;
					Bones1: MeshPart;
					Bones4: MeshPart;
					Bones: MeshPart;
					Bones3: MeshPart;
				};
				ChestCloset: MeshPart;
				CrateCloset: MeshPart;
				Gift: Model & {
					gift: MeshPart;
					["Bones.001"]: MeshPart;
				};
				CrateOpen: Model & {
					CrateOpen: MeshPart;
					["Bones.001"]: MeshPart;
				};
			};
			NorthpoleMountain: Model & {
				NorthpoleMountainA: MeshPart;
				NorthpoleMountainC: MeshPart;
				NorthpoleMountainD: MeshPart;
				NorthpoleMountainB: MeshPart;
				NorthpoleMountainE: MeshPart;
			};
			Rocks: Folder & {
				RocckA2: MeshPart;
				RocckB1: MeshPart;
				RocckB3: MeshPart;
				RocckB2: MeshPart;
				MojaveRockC: MeshPart;
				MojaveRockB: MeshPart;
				RocckA3: MeshPart;
				MojaveRockA: MeshPart;
				RocckA1: MeshPart;
			};
		};
		Jungle2: Folder & {
			Area33: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			JungleFloor: Part;
			Area34: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area31: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area35: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
			Area32: Folder & {
				Decoration: Folder & {
					Vegetation: Folder & {
						Plants: Folder;
						Trees: Folder;
					};
					Mountains: Folder;
				};
			};
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			["@rbxts"]: Folder & {
				["pretty-react-hooks"]: Folder & {
					out: ModuleScript & {
						["use-latest"]: ModuleScript & {
							["use-latest"]: ModuleScript;
						};
						utils: Folder & {
							binding: ModuleScript;
							hoarcekat: ModuleScript;
							["shallow-equal"]: ModuleScript;
							math: ModuleScript;
							motor: ModuleScript;
							testez: ModuleScript;
						};
						["use-binding-state"]: ModuleScript & {
							["use-binding-state"]: ModuleScript;
						};
						["use-unmount-effect"]: ModuleScript & {
							["use-unmount-effect"]: ModuleScript;
						};
						["use-update-effect"]: ModuleScript & {
							["use-update-effect"]: ModuleScript;
						};
						["use-previous"]: ModuleScript & {
							["use-previous"]: ModuleScript;
						};
						["use-interval"]: ModuleScript & {
							["use-interval"]: ModuleScript;
						};
						["use-debounce-callback"]: ModuleScript & {
							["use-debounce-callback"]: ModuleScript;
						};
						["use-defer-state"]: ModuleScript & {
							["use-defer-state"]: ModuleScript;
						};
						["use-key-press"]: ModuleScript & {
							["use-key-press"]: ModuleScript;
						};
						["use-timeout"]: ModuleScript & {
							["use-timeout"]: ModuleScript;
						};
						["use-composed-ref"]: ModuleScript & {
							["use-composed-ref"]: ModuleScript;
						};
						["use-async-callback"]: ModuleScript & {
							["use-async-callback"]: ModuleScript;
						};
						["use-throttle-state"]: ModuleScript & {
							["use-throttle-state"]: ModuleScript;
						};
						["use-defer-callback"]: ModuleScript & {
							["use-defer-callback"]: ModuleScript;
						};
						["use-latest-callback"]: ModuleScript & {
							["use-latest-callback"]: ModuleScript;
						};
						["use-motor"]: ModuleScript & {
							["use-motor"]: ModuleScript;
						};
						["use-throttle-callback"]: ModuleScript & {
							["use-throttle-callback"]: ModuleScript;
						};
						["use-update"]: ModuleScript & {
							["use-update"]: ModuleScript;
						};
						["use-async-effect"]: ModuleScript & {
							["use-async-effect"]: ModuleScript;
						};
						["use-debounce-effect"]: ModuleScript & {
							["use-debounce-effect"]: ModuleScript;
						};
						["use-binding-listener"]: ModuleScript & {
							["use-binding-listener"]: ModuleScript;
						};
						["use-async"]: ModuleScript & {
							["use-async"]: ModuleScript;
						};
						["use-viewport"]: ModuleScript & {
							["use-viewport"]: ModuleScript;
						};
						["use-throttle-effect"]: ModuleScript & {
							["use-throttle-effect"]: ModuleScript;
						};
						["use-timer"]: ModuleScript & {
							["use-timer"]: ModuleScript;
						};
						["use-defer-effect"]: ModuleScript & {
							["use-defer-effect"]: ModuleScript;
						};
						["use-debounce-state"]: ModuleScript & {
							["use-debounce-state"]: ModuleScript;
						};
						["use-event-listener"]: ModuleScript & {
							["use-event-listener"]: ModuleScript;
						};
						["use-lifetime"]: ModuleScript & {
							["use-lifetime"]: ModuleScript;
						};
						["use-camera"]: ModuleScript & {
							["use-camera"]: ModuleScript;
						};
						["use-mount-effect"]: ModuleScript & {
							["use-mount-effect"]: ModuleScript;
						};
						["use-mouse"]: ModuleScript & {
							["use-mouse"]: ModuleScript;
						};
					};
				};
				rodux: Folder & {
					src: ModuleScript & {
						combineReducers: ModuleScript;
						NoYield: ModuleScript;
						createReducer: ModuleScript;
						loggerMiddleware: ModuleScript;
						makeActionCreator: ModuleScript;
						thunkMiddleware: ModuleScript;
						prettyPrint: ModuleScript;
						Store: ModuleScript;
						Signal: ModuleScript;
					};
				};
				["react-roblox"]: ModuleScript;
				flipper: Folder & {
					typings: Folder;
					src: ModuleScript & {
						isMotor: ModuleScript;
						Spring: ModuleScript;
						GroupMotor: ModuleScript;
						Signal: ModuleScript;
						SingleMotor: ModuleScript;
						Instant: ModuleScript;
						Linear: ModuleScript;
						BaseMotor: ModuleScript;
					};
				};
				["set-timeout"]: Folder & {
					out: ModuleScript & {
						["set-countdown"]: ModuleScript;
						["set-interval"]: ModuleScript;
						["debounce.spec"]: ModuleScript;
						["set-timeout"]: ModuleScript;
						throttle: ModuleScript;
						["set-timeout.spec"]: ModuleScript;
						["throttle.spec"]: ModuleScript;
						["set-interval.spec"]: ModuleScript;
						["set-countdown.spec"]: ModuleScript;
						debounce: ModuleScript;
					};
				};
				["compiler-types"]: Folder & {
					types: Folder;
				};
				redux: Folder & {
					src: ModuleScript & {
						combineReducers: ModuleScript;
						NoYield: ModuleScript;
						createReducer: ModuleScript;
						loggerMiddleware: ModuleScript;
						makeActionCreator: ModuleScript;
						thunkMiddleware: ModuleScript;
						prettyPrint: ModuleScript;
						Store: ModuleScript;
						Signal: ModuleScript;
					};
				};
				ripple: ModuleScript & {
					["createMotion.spec"]: ModuleScript;
					config: ModuleScript;
					solvers: Folder & {
						tween: ModuleScript;
						["linear.spec"]: ModuleScript;
						["immediate.spec"]: ModuleScript;
						["tween.spec"]: ModuleScript;
						["spring.spec"]: ModuleScript;
						spring: ModuleScript;
						linear: ModuleScript;
						immediate: ModuleScript;
					};
					utils: Folder & {
						graph: ModuleScript;
						assign: ModuleScript;
						spy: ModuleScript;
						snapshot: ModuleScript;
						intermediate: ModuleScript;
						merge: ModuleScript;
					};
					createMotion: ModuleScript;
					types: ModuleScript;
				};
				ReactLua: Folder & {
					node_modules: Folder & {
						["@jsdotlua"]: Folder & {
							number: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									MAX_SAFE_INTEGER: ModuleScript;
									isSafeInteger: ModuleScript;
									toExponential: ModuleScript;
									isNaN: ModuleScript;
									isInteger: ModuleScript;
									isFinite: ModuleScript;
									MIN_SAFE_INTEGER: ModuleScript;
								};
							};
							collections: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									Map: ModuleScript & {
										Map: ModuleScript;
										coerceToTable: ModuleScript;
										coerceToMap: ModuleScript;
									};
									Object: ModuleScript & {
										values: ModuleScript;
										assign: ModuleScript;
										is: ModuleScript;
										seal: ModuleScript;
										entries: ModuleScript;
										preventExtensions: ModuleScript;
										isFrozen: ModuleScript;
										keys: ModuleScript;
										freeze: ModuleScript;
										None: ModuleScript;
									};
									Set: ModuleScript;
									Array: ModuleScript & {
										flat: ModuleScript;
										indexOf: ModuleScript;
										every: ModuleScript;
										slice: ModuleScript;
										sort: ModuleScript;
										shift: ModuleScript;
										map: ModuleScript;
										isArray: ModuleScript;
										findIndex: ModuleScript;
										unshift: ModuleScript;
										splice: ModuleScript;
										filter: ModuleScript;
										find: ModuleScript;
										forEach: ModuleScript;
										reverse: ModuleScript;
										includes: ModuleScript;
										concat: ModuleScript;
										from: ModuleScript & {
											fromString: ModuleScript;
											fromArray: ModuleScript;
											fromSet: ModuleScript;
											fromMap: ModuleScript;
										};
										join: ModuleScript;
										flatMap: ModuleScript;
										reduce: ModuleScript;
										some: ModuleScript;
									};
									inspect: ModuleScript;
									WeakMap: ModuleScript;
								};
							};
							["react-roblox"]: ModuleScript & {
								client: Folder & {
									roblox: Folder & {
										RobloxComponentProps: ModuleScript;
										SingleEventManager: ModuleScript;
										getDefaultInstanceProperty: ModuleScript;
									};
									ReactRobloxHostConfig: ModuleScript;
									ReactRobloxRoot: ModuleScript;
									ReactRoblox: ModuleScript;
									ReactRobloxComponentTree: ModuleScript;
									["ReactRobloxHostTypes.roblox"]: ModuleScript;
									ReactRobloxComponent: ModuleScript;
								};
								["ReactReconciler.roblox"]: ModuleScript;
							};
							["react-is"]: ModuleScript;
							["react-shallow-renderer"]: ModuleScript;
							["roact-compat"]: ModuleScript & {
								warnOnce: ModuleScript;
								Portal: ModuleScript;
								setGlobalConfig: ModuleScript;
								oneChild: ModuleScript;
								createFragment: ModuleScript;
								RoactTree: ModuleScript;
							};
							["react-reconciler"]: ModuleScript & {
								ReactRootTags: ModuleScript;
								["ReactFiberDevToolsHook.new"]: ModuleScript;
								["ReactFiberWorkLoop.new"]: ModuleScript;
								ReactTestSelectors: ModuleScript;
								["ReactFiberHotReloading.new"]: ModuleScript;
								ReactCapturedValue: ModuleScript;
								["ReactFiberUnwindWork.new"]: ModuleScript;
								["ReactFiberNewContext.new"]: ModuleScript;
								["ReactProfilerTimer.new"]: ModuleScript;
								ReactInternalTypes: ModuleScript;
								["ReactFiber.new"]: ModuleScript;
								["ReactFiberCommitWork.new"]: ModuleScript;
								ReactFiberTransition: ModuleScript;
								forks: Folder & {
									["ReactFiberHostConfig.test"]: ModuleScript;
								};
								["ReactStrictModeWarnings.new"]: ModuleScript;
								ReactPortal: ModuleScript;
								SchedulingProfiler: ModuleScript;
								["SchedulerWithReactIntegration.new"]: ModuleScript;
								ReactWorkTags: ModuleScript;
								ReactFiberHostConfig: ModuleScript;
								ReactTypeOfMode: ModuleScript;
								ReactFiberOffscreenComponent: ModuleScript;
								["ReactUpdateQueue.new"]: ModuleScript;
								ReactFiberLane: ModuleScript;
								["ReactFiberClassComponent.new"]: ModuleScript;
								ReactHookEffectTags: ModuleScript;
								ReactFiberWorkInProgress: ModuleScript;
								ReactFiberTreeReflection: ModuleScript;
								["ReactChildFiber.new"]: ModuleScript;
								MaxInts: ModuleScript;
								["ReactFiberLazyComponent.new"]: ModuleScript;
								ReactFiberErrorDialog: ModuleScript;
								["ReactFiberBeginWork.new"]: ModuleScript;
								ReactFiberFlags: ModuleScript;
								DebugTracing: ModuleScript;
								ReactFiberErrorLogger: ModuleScript;
								["ReactFiberHooks.new"]: ModuleScript;
								["ReactFiberSchedulerPriorities.roblox"]: ModuleScript;
								["ReactFiberHydrationContext.new"]: ModuleScript;
								ReactFiberReconciler: ModuleScript;
								["ReactFiberContext.new"]: ModuleScript;
								["ReactFiberSuspenseContext.new"]: ModuleScript;
								["ReactFiberStack.new"]: ModuleScript;
								["ReactFiberHostContext.new"]: ModuleScript;
								["ReactMutableSource.new"]: ModuleScript;
								ReactCurrentFiber: ModuleScript;
								ReactFiberComponentStack: ModuleScript;
								["ReactFiberSuspenseComponent.new"]: ModuleScript;
								["ReactFiberCompleteWork.new"]: ModuleScript;
								["ReactFiberReconciler.new"]: ModuleScript;
								["ReactFiberRoot.new"]: ModuleScript;
								["ReactFiberThrow.new"]: ModuleScript;
							};
							math: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									clz32: ModuleScript;
								};
							};
							timers: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									makeIntervalImpl: ModuleScript;
									makeTimerImpl: ModuleScript;
								};
							};
							["react-test-renderer"]: ModuleScript & {
								ReactTestRenderer: ModuleScript;
								roblox: Folder & {
									RobloxComponentProps: ModuleScript;
								};
								ReactTestHostConfig: ModuleScript;
							};
							shared: ModuleScript & {
								["UninitializedState.roblox"]: ModuleScript;
								console: ModuleScript;
								ReactComponentStackFrame: ModuleScript;
								invariant: ModuleScript;
								ReactTypes: ModuleScript;
								objectIs: ModuleScript;
								ReactInstanceMap: ModuleScript;
								["Type.roblox"]: ModuleScript;
								["ConsolePatchingDev.roblox"]: ModuleScript;
								["ErrorHandling.roblox"]: ModuleScript;
								ReactFeatureFlags: ModuleScript;
								ReactElementType: ModuleScript;
								shallowEqual: ModuleScript;
								isValidElementType: ModuleScript;
								invokeGuardedCallbackImpl: ModuleScript;
								getComponentName: ModuleScript;
								formatProdErrorMessage: ModuleScript;
								PropMarkers: Folder & {
									Change: ModuleScript;
									Event: ModuleScript;
									Tag: ModuleScript;
								};
								consoleWithStackDev: ModuleScript;
								ReactErrorUtils: ModuleScript;
								["enqueueTask.roblox"]: ModuleScript;
								checkPropTypes: ModuleScript;
								ReactSharedInternals: ModuleScript & {
									ReactDebugCurrentFrame: ModuleScript;
									ReactCurrentOwner: ModuleScript;
									ReactCurrentDispatcher: ModuleScript;
									IsSomeRendererActing: ModuleScript;
									ReactCurrentBatchConfig: ModuleScript;
								};
								ReactVersion: ModuleScript;
								ReactSymbols: ModuleScript;
								["flowtypes.roblox"]: ModuleScript;
								["Symbol.roblox"]: ModuleScript;
								ExecutionEnvironment: ModuleScript;
								ReactFiberHostConfig: ModuleScript & {
									WithNoTestSelectors: ModuleScript;
									WithNoHydration: ModuleScript;
									WithNoPersistence: ModuleScript;
								};
							};
							string: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									endsWith: ModuleScript;
									indexOf: ModuleScript;
									lastIndexOf: ModuleScript;
									trimStart: ModuleScript;
									trim: ModuleScript;
									findOr: ModuleScript;
									substr: ModuleScript;
									slice: ModuleScript;
									startsWith: ModuleScript;
									charCodeAt: ModuleScript;
									trimEnd: ModuleScript;
									includes: ModuleScript;
									split: ModuleScript;
								};
							};
							promise: Folder & {
								lib: ModuleScript;
								["package"]: ModuleScript;
							};
							["luau-polyfill"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									Promise: ModuleScript;
									["extends"]: ModuleScript;
									AssertionError: ModuleScript & {
										["AssertionError.global"]: ModuleScript;
									};
									Error: ModuleScript & {
										["Error.global"]: ModuleScript;
									};
									encodeURIComponent: ModuleScript;
								};
							};
							["instance-of"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									["instanceof"]: ModuleScript;
								};
							};
							["es7-types"]: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript;
							};
							console: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									makeConsoleImpl: ModuleScript;
								};
							};
							["react-devtools-extensions"]: ModuleScript & {
								backend: ModuleScript;
							};
							["react-devtools-shared"]: ModuleScript & {
								hook: ModuleScript;
								bridge: ModuleScript;
								constants: ModuleScript;
								utils: ModuleScript;
								devtools: ModuleScript & {
									views: Folder & {
										Components: Folder & {
											types: ModuleScript;
										};
										Profiler: Folder & {
											InteractionsChartBuilder: ModuleScript;
											utils: ModuleScript;
											CommitTreeBuilder: ModuleScript;
											RankedChartBuilder: ModuleScript;
											FlamegraphChartBuilder: ModuleScript;
											types: ModuleScript;
										};
									};
									utils: ModuleScript;
									cache: ModuleScript;
									types: ModuleScript;
									ProfilingCache: ModuleScript;
									store: ModuleScript;
									ProfilerStore: ModuleScript;
								};
								events: ModuleScript;
								hydration: ModuleScript;
								["clipboardjs.mock"]: ModuleScript;
								storage: ModuleScript;
								backend: ModuleScript & {
									console: ModuleScript;
									NativeStyleEditor: Folder & {
										types: ModuleScript;
									};
									ReactSymbols: ModuleScript;
									renderer: ModuleScript;
									agent: ModuleScript;
									utils: ModuleScript;
									types: ModuleScript;
								};
								types: ModuleScript;
							};
							scheduler: ModuleScript & {
								SchedulerPriorities: ModuleScript;
								TracingSubscriptions: ModuleScript;
								SchedulerMinHeap: ModuleScript;
								forks: Folder & {
									["SchedulerHostConfig.mock"]: ModuleScript;
									["SchedulerHostConfig.default"]: ModuleScript;
								};
								Tracing: ModuleScript;
								Scheduler: ModuleScript;
								unstable_mock: ModuleScript;
								SchedulerProfiling: ModuleScript;
								SchedulerHostConfig: ModuleScript;
								SchedulerFeatureFlags: ModuleScript;
							};
							react: ModuleScript & {
								["None.roblox"]: ModuleScript;
								ReactLazy: ModuleScript;
								ReactElementValidator: ModuleScript;
								["createSignal.roblox"]: ModuleScript;
								ReactElement: ModuleScript;
								ReactMutableSource: ModuleScript;
								ReactContext: ModuleScript;
								ReactBaseClasses: ModuleScript;
								ReactNoopUpdateQueue: ModuleScript;
								ReactMemo: ModuleScript;
								ReactCreateRef: ModuleScript;
								ReactForwardRef: ModuleScript;
								React: ModuleScript;
								["ReactBinding.roblox"]: ModuleScript;
								ReactHooks: ModuleScript;
								ReactChildren: ModuleScript;
							};
							["react-cache"]: ModuleScript & {
								ReactCacheOld: ModuleScript;
								LRU: ModuleScript;
							};
							boolean: Folder & {
								["package"]: ModuleScript;
								src: ModuleScript & {
									toJSBoolean: ModuleScript;
								};
							};
							ReactDebugTools: ModuleScript & {
								ReactDebugTools: ModuleScript;
								ReactDebugHooks: ModuleScript;
							};
						};
						commander: Folder & {
							["package"]: ModuleScript;
							["package-support"]: ModuleScript;
							lib: Folder;
							typings: Folder;
						};
						[".luau-aliases"]: Folder & {
							["symbol-luau"]: ModuleScript;
							["@jsdotlua"]: Folder & {
								number: ModuleScript;
								console: ModuleScript;
								["react-roblox"]: ModuleScript;
								["react-is"]: ModuleScript;
								["instance-of"]: ModuleScript;
								["react-cache"]: ModuleScript;
								["es7-types"]: ModuleScript;
								math: ModuleScript;
								["react-debug-tools"]: ModuleScript;
								["react-test-renderer"]: ModuleScript;
								promise: ModuleScript;
								timers: ModuleScript;
								string: ModuleScript;
								shared: ModuleScript;
								scheduler: ModuleScript;
								["roact-compat"]: ModuleScript;
								["react-reconciler"]: ModuleScript;
								["react-devtools-extensions"]: ModuleScript;
								["react-shallow-renderer"]: ModuleScript;
								collections: ModuleScript;
								react: ModuleScript;
								["react-devtools-shared"]: ModuleScript;
								boolean: ModuleScript;
								["luau-polyfill"]: ModuleScript;
							};
						};
						["symbol-luau"]: Folder & {
							["package"]: ModuleScript;
							src: ModuleScript & {
								["Registry.global"]: ModuleScript;
								Symbol: ModuleScript;
							};
							LICENSE: StringValue;
						};
						npmluau: Folder & {
							["package"]: ModuleScript;
							src: Folder;
							["luau-types-re-export"]: Folder & {
								pkg: Folder & {
									["package"]: ModuleScript;
								};
							};
							LICENSE: StringValue;
						};
						walkdir: Folder & {
							["package"]: ModuleScript;
							test: Folder & {
								dir: Folder & {
									["nested-symlink"]: Folder;
									symlinks: Folder & {
										dir1: Folder;
										dir2: Folder;
									};
									foo: Folder & {
										a: Folder & {
											b: Folder & {
												c: Folder;
											};
										};
									};
								};
								comparison: Folder & {
									["package"]: ModuleScript;
								};
							};
						};
						[".bin"]: Folder;
					};
					ReactShallowRenderer: ModuleScript;
					ReactRoblox: ModuleScript;
					ReactDevtoolsShared: ModuleScript;
					ReactIs: ModuleScript;
					Shared: ModuleScript;
					ReactReconciler: ModuleScript;
					RoactCompat: ModuleScript;
					Scheduler: ModuleScript;
					ReactTestRenderer: ModuleScript;
					React: ModuleScript;
					ReactDevtoolsExtensions: ModuleScript;
					ReactDebugTools: ModuleScript;
					ReactCache: ModuleScript;
				};
				types: Folder & {
					include: Folder & {
						generated: Folder;
					};
				};
				LuauPolyfill: ModuleScript & {
					Number: ModuleScript & {
						MAX_SAFE_INTEGER: ModuleScript;
						isSafeInteger: ModuleScript;
						toExponential: ModuleScript;
						isNaN: ModuleScript;
						isInteger: ModuleScript;
						isFinite: ModuleScript;
						MIN_SAFE_INTEGER: ModuleScript;
					};
					Collections: ModuleScript & {
						Map: ModuleScript & {
							Map: ModuleScript;
							coerceToTable: ModuleScript;
							coerceToMap: ModuleScript;
						};
						Object: ModuleScript & {
							values: ModuleScript;
							assign: ModuleScript;
							is: ModuleScript;
							seal: ModuleScript;
							entries: ModuleScript;
							preventExtensions: ModuleScript;
							isFrozen: ModuleScript;
							keys: ModuleScript;
							freeze: ModuleScript;
							None: ModuleScript;
						};
						Set: ModuleScript;
						Array: ModuleScript & {
							flat: ModuleScript;
							indexOf: ModuleScript;
							every: ModuleScript;
							slice: ModuleScript;
							sort: ModuleScript;
							shift: ModuleScript;
							map: ModuleScript;
							isArray: ModuleScript;
							findIndex: ModuleScript;
							unshift: ModuleScript;
							splice: ModuleScript;
							filter: ModuleScript;
							find: ModuleScript;
							forEach: ModuleScript;
							reverse: ModuleScript;
							includes: ModuleScript;
							concat: ModuleScript;
							from: ModuleScript & {
								fromString: ModuleScript;
								fromArray: ModuleScript;
								fromSet: ModuleScript;
								fromMap: ModuleScript;
							};
							join: ModuleScript;
							flatMap: ModuleScript;
							reduce: ModuleScript;
							some: ModuleScript;
						};
						inspect: ModuleScript;
						WeakMap: ModuleScript;
					};
					InstanceOf: ModuleScript & {
						["instanceof"]: ModuleScript;
					};
					Symbol: ModuleScript & {
						Symbol: ModuleScript;
						["Registry.global"]: ModuleScript;
						GlobalRegistry: ModuleScript;
					};
					Timers: ModuleScript & {
						makeIntervalImpl: ModuleScript;
						makeTimerImpl: ModuleScript;
					};
					String: ModuleScript & {
						endsWith: ModuleScript;
						indexOf: ModuleScript;
						lastIndexOf: ModuleScript;
						trimStart: ModuleScript;
						trim: ModuleScript;
						findOr: ModuleScript;
						substr: ModuleScript;
						slice: ModuleScript;
						startsWith: ModuleScript;
						charCodeAt: ModuleScript;
						trimEnd: ModuleScript;
						includes: ModuleScript;
						split: ModuleScript;
					};
					LuauPolyfill: ModuleScript & {
						Promise: ModuleScript;
						["extends"]: ModuleScript;
						AssertionError: ModuleScript & {
							["AssertionError.global"]: ModuleScript;
						};
						Error: ModuleScript & {
							["Error.global"]: ModuleScript;
						};
						encodeURIComponent: ModuleScript;
					};
					Math: ModuleScript;
					Console: ModuleScript & {
						makeConsoleImpl: ModuleScript;
					};
					Boolean: ModuleScript & {
						toJSBoolean: ModuleScript;
					};
					ES7Types: ModuleScript;
				};
				react: ModuleScript & {
					tags: ModuleScript;
				};
				services: ModuleScript;
				ReactRedux: ModuleScript & {
					hooks: Folder & {
						useReduxContext: ModuleScript;
						useSelector: ModuleScript;
						useDispatch: ModuleScript;
						useStore: ModuleScript;
					};
					utils: Folder & {
						batch: ModuleScript;
						["reactBatchedUpdates.roblox"]: ModuleScript;
						shallowEqual: ModuleScript;
						Subscription: ModuleScript;
						useSyncExternalStore: ModuleScript;
					};
					useSyncExternalStore: Folder & {
						useSyncExternalStoreWithSelector: ModuleScript;
						useSyncExternalStoreShimClient: ModuleScript;
					};
					components: Folder & {
						Context: ModuleScript;
						Provider: ModuleScript;
					};
					types: ModuleScript;
				};
				signal: ModuleScript;
			};
		};
	};
}
